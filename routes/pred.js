const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const predModel = require('../models/predictions')

router.post('/getChemicalpred', (req, res) => {
    let reference = req.body.reference
    // console.log(refe rence)

    predModel.find({reference: reference}, (err, docs) => {
        if(err){
            return res.status(400).json({
                error: true,
                message: err.message
            })
        } else {
            return res.status(200).json({
                error: false,
                message: 'Found preds for selected fertilizer!',
                data: docs
            })
        }
    })
})

module.exports = router