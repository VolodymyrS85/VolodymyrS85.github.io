const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true,
        minlength: 2,
        maxlength: 10,
        index: true
    },

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
        index: true
    },

    length: {
        type: String,
        required: true,
        trim: true
    },

    start: {
        type: Date,
        required: true
    },

    resort: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },

    perPerson: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 20,
        maxlength: 1000
    }

});

// Compound index to improve query performance
tripSchema.index({
    code: 1,
    perPerson: 1
});

// Export model
const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;