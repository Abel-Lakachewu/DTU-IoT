const express = require('express');
const { check } = require('express-validator');

const internsControllers = require('../controllers/interns-controllers');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get('/', internsControllers.getInterns);

router.get('/:eid', internsControllers.getEmailById);

router.post(
  '/',
  fileUpload.single('image'),
  [
    check('title')
      .not()
      .isEmpty(),
      check('email')
      .not()
      .isEmpty(),
      check('gpa')
      .not()
      .isEmpty(),
      check('team')
      .not()
      .isEmpty()
      ,
      
    check('address')
      .not()
      .isEmpty()
  ],
  internsControllers.createPlace
);

router.delete('/:id', internsControllers.deleteIntern);



module.exports = router;
