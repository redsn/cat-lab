const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newCat = new Schema ({
    breed: {type: String},
    description: {type: String},
    age: {type: Number}
}, {timestamps: true})

module.exports = mongoose.model('Cat', newCat);