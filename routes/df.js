const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const dfModel = require('../models/Data_fertilizers')

router.post('/getChemicalData', (req, res) => {
    let reference = req.body.reference
    // console.log(refe rence)

    dfModel.find({reference: reference}, (err, docs) => {
        if(err){
            return res.status(400).json({
                error: true,
                message: err.message
            })
        } else {
            return res.status(200).json({
                error: false,
                message: 'Found data for selected fertilizer!',
                data: docs
            })
        }
    })
})

module.exports = router