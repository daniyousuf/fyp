const mongoose = require('mongoose')

predictionSchema = new mongoose.Schema({

    ds : 
    {
        type: Date
    },

    production: {
        type: Number,
        required: true
    },
    import: {
        type: Number,
        required: true
    },
    consumption: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    }



})

module.exports = new mongoose.model('preds_fertilizer', predictionSchema)