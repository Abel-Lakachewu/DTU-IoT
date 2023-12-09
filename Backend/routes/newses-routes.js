const express = require('express');
const { check } = require('express-validator');

const newsesControllers = require('../controllers/newses-controllers');
const { route } = require('./places-routes');

const router = express.Router();

const fileUpload = require('../middleware/file-upload');
 

router.get('/', newsesControllers.getNewses );

router.get('/:id', newsesControllers.getNewsById);

router.post('/', fileUpload.single('image'),
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }) 
  ],
 newsesControllers.createNews);
 

router.patch('/:id',
[
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
newsesControllers.updateNews);

router.delete('/:id', newsesControllers.deleteNews);



module.exports = router;