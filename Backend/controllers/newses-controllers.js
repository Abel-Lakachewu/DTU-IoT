const uuid = require('uuid/v4'); //maybe the declaration maynot match with the vaersion here.
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const News = require('../models/news');

const getNewses = async (req, res, next) => {

let newses;
try {
    newses = await News.find();
} catch(err) {
   const error = new HttpError('Fetching the list of newses failed', 500);
   return next(error);
}

    if (!newses || newses.length === 0) {
        return next(
          new HttpError('Could not find newses. Sorry!', 404)
        );
      }

    res.json({newses: newses.map(news => news.toObject({getters:true}))});
}

const getNewsById =async (req, res, next) => {
    const newsId = req.params.id;
    
    let news;

try {
   news = await News.findById(newsId);
} catch(err) {
    const error = new HttpError(
        'Cannot find a news with that News id',500
    );
    return next(error);
}


    if(!news) {
        const error = new HttpError('Could not find a news for the provided id.', 404
        );
        return(error);
    }

    res.json({ news: news.toObject({getters: true}) });
}

const createNews = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }

    const { title, description } = req.body;
const createdNews = new News ({
    title,
    description,
    image: req.file.path
});

try {
await createdNews.save();
} catch(err) {
    const error = new HttpError(
        'Creating a new News failed', 500
    )
    return next(error);
}
res.status(201).json({news: createdNews})

};



const updateNews = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
      }
    

    const { title, description } = req.body;
    const newsId = req.params.id;

    let news;
    try {
        news = await News.findById(newsId);
    } catch(err) {
        const error = new HttpError(
            'Couldnot Update place', 500
        );
        return next(error);
    }

    news.title = title;
    news.description=description;

    try {
    await news.save();
    } catch(err) {
        const error = new HttpError(
            'Cannot save the updated info', 500
        );
        return next(error);
    }

    res.status(200).json({news: news.toObject({getters:true})});

    };


const deleteNews = async (req, res, next) => {
    const newsId = req.params.id;
    
    let news;
    try {
        news = await News.findById(newsId);
    } catch(err) {
        const error = new HttpError(
            'Couldnot delete news', 500
        );
        return next(error);
    }
    
    try {
        await news.remove();
      } catch (err) {
        const error = new HttpError(
          'Something went wrong, could not delete news.',
          500
        );
        return next(error);
      }

      res.status(200).json({ message: 'Deleted news.' }); 
}

exports.getNewses = getNewses;
exports.getNewsById = getNewsById;
exports.createNews = createNews;
exports.updateNews = updateNews;
exports.deleteNews = deleteNews;