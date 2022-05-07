const mongoose = require('mongoose')

chemicalSchema = new mongoose.Schema({
    chemical: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    formula: {
        type: String,
        required: true
    },

    reference: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model('chemical', chemicalSchema)