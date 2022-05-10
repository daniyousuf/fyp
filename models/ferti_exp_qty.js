const mongoose = require('mongoose')

const feqSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    country_name: {
        type: String,
        required: true
    },
    item: {
        type: Number,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    scale: {
        type: String,
        required: true
    },
    units: {
        type: String,
        required: true
    },
    graph : {
        type : {
            year : [ Date ], values : [Number]
        },
        required : true 
    }
})

module.exports = new mongoose.model('fertilizers_by_exp_quantitie', feqSchema)