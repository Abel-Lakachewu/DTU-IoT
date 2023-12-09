const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const internAccSchema = new Schema({
    title: { type: String },
    email: { type: String },
    gpa: { type: Number }
});

module.exports = mongoose.model('InternAcc', internAccSchema);