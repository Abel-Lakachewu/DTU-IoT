const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const internSchema = new Schema({
    title: { type: String },
    email: { type: String },
    gpa: { type: Number },
    team: { type: String },
    image: { type: String },
    address: { type: String}
});

module.exports = mongoose.model('Intern', internSchema);