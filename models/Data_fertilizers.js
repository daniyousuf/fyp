const mongoose = require('mongoose')

const data_fertilizersSchema = new mongoose.Schema({
    Production: {
        type: Number,
        required: true
    },
    Import: {
        type: Number,
        required: true
    },
    Consumption: {
        type: Number,
        required: true
    },
    Export: {
        type: Number,
        required: true
    },
    Year_Date: {
        Type: Date
    },
    reference: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model('data_fertilizer', data_fertilizersSchema)