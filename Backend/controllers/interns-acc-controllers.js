const fs = require('fs');

const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const InternAcc = require('../models/intern-acc');


const getInternsAcc = async (req, res, next) => {
    try{
        const internsAcc = await InternAcc.find()
        res.status(200).json(internsAcc);
        } catch(err) {
            res.status(500).json(err)
        }
}

const createPlaceAcc = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, email, gpa } = req.body;


  const createdPlaceAcc = new InternAcc({
    title,
    gpa,
    email
  });

  try {

 await createdPlaceAcc.save();
  } catch (err) {
    const error = new HttpError(
      'Failed to add to accepted interns, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ internAcc: createdPlaceAcc });
};

const deleteInternAcc = async(req, res) => {
    const internAccId = req.params.id;

    let internAcc
    try {
        internAcc = await InternAcc.findById(internAccId);
    } catch(err) {
        res.status(500).json(err)
    }

    try {
        await internAcc.remove();
        res.status(200).json("deleted")
      } catch (err) {
        res.status(500).json(err)
      }
}

exports.createPlaceAcc = createPlaceAcc;
exports.getInternsAcc = getInternsAcc;
exports.deleteInternAcc = deleteInternAcc;
