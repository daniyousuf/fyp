const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const chemicalModel = require('../models/Chemicals')

router.get('/getAllChemicals', (req, res) => {
    chemicalModel.find({}, (err, docs) => {
        if(err){
            return res.status(400).json({
                error: true,
                message: err.message
            })
        } else {
            return res.status(200).json({
                error: false,
                message: 'Found distinct fertilizers!',
                data: docs
            })
        }
    })
})

module.exports = router