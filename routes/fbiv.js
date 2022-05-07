const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const fivModel = require('../models/ferti_imp_val')

router.get('/getFivData', (req, res) => {
    fivModel.find({}, (err, docs) => {
        if(err){
            return res.status(400).json({
                error: true,
                message: err.message
            })
        } else {
            return res.status(200).json({
                error: false,
                message: 'data found',
                data: docs
            })
        }
    })
})

module.exports = router