const mongoose = require('mongoose')

const fivSchema = new mongoose.Schema({
   
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
    2003: {
        type: Number,
        required: true
    },
    2004: {
        type: Number,
        required: true
    },
    2005: {
        type: Number,
        required: true
    },
    2006: {
        type: Number,
        required: true
    },
    2007: {
        type: Number,
        required: true
    },
    2008: {
        type: Number,
        required: true
    },
    2009: {
        type: Number,
        required: true
    },
    2010: {
        type: Number,
        required: true
    },
    2011: {
        type: Number,
        required: true
    },
    2012: {
        type: Number,
        required: true
    },
    2013: {
        type: Number,
        required: true
    },
    2014: {
        type: Number,
        required: true
    },
    2015: {
        type: Number,
        required: true
    },
    2016: {
        type: Number,
        required: true
    },
    2017: {
        type: Number,
        required: true
    },
    2018: {
        type: Number,
        required: true
    },
    2019: {
        type: Number,
        required: true
    }
})

module.exports = new mongoose.model('fertilizers_by_imp_value', fivSchema)