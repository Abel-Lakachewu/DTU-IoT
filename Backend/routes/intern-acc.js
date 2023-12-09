const express = require('express');
const { check } = require('express-validator');

const internsAccControllers = require('../controllers/interns-acc-controllers');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get('/', internsAccControllers.getInternsAcc);

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
      .isEmpty()
  ],
  internsAccControllers.createPlaceAcc
);


router.delete('/:id', internsAccControllers.deleteInternAcc);

module.exports = router;
