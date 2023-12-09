const fs = require('fs');

const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Intern = require('../models/intern');
const Email = require('../models/intern');

const getEmailById = async (req, res, next) => {
  const emailId = req.params.eid;

  let email;
  try {
    email = await Email.findById(emailId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find an email.',
      500
    );
    return next(error);
  }

  if (!email) {
    const error = new HttpError(
      'Could not find email for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ email: email.toObject({ getters: true }) });
};


const getInterns = async (req, res, next) => {
    try{
        const interns = await Intern.find()
        res.status(200).json(interns);
        } catch(err) {
            res.status(500).json(err)
        }
}

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, address, team, email, gpa } = req.body;


  const createdPlace = new Intern({
    title,
    team,
    gpa,
    address,
    email,
    image: req.file.path
  });

  try {

 await createdPlace.save();
  } catch (err) {
    const error = new HttpError(
      'Creating Internship Request failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ intern: createdPlace });
};

const deleteIntern = async(req, res) => {
    const internId = req.params.id;

    let intern
    try {
        intern = await Intern.findById(internId);
    } catch(err) {
        res.status(500).json(err)
    }

    try {
        await intern.remove();
        res.status(200).json("deleted")
      } catch (err) {
        res.status(500).json(err)
      }
}



// const deletePlace = async (req, res, next) => {
//   const placeId = req.params.pid;

//   let place;
//   try {
//     place = await Place.findById(placeId).populate('creator');
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong, could not delete place.',
//       500
//     );
//     return next(error);
//   }

//   if (!place) {
//     const error = new HttpError('Could not find place for this id.', 404);
//     return next(error);
//   }

//   const imagePath = place.image;

//   try {
//     // const sess = await mongoose.startSession();
//     // sess.startTransaction();
//     // await place.remove({ session: sess });
//     // place.creator.places.pull(place);
//     // await place.creator.save({ session: sess });
//     // await sess.commitTransaction();
//     await place.remove();
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong, could not delete place.',
//       500
//     );
//     return next(error);
//   }

//   fs.unlink(imagePath, err => {
//     console.log(err);
//   });

//   res.status(200).json({ message: 'Deleted place.' });
// };

exports.createPlace = createPlace;
exports.getInterns = getInterns;
exports.deleteIntern = deleteIntern;
exports.getEmailById = getEmailById;

