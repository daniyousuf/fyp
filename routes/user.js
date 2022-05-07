const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')

const jwt = require("jsonwebtoken");

const generateJwtToken = (_id, role) => {
   
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

router.post('/signup', (req, res) => {

    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (user)
          return res.status(400).json({
            message: "User already registered",
          });
    
        const { firstName, lastName, email, password } = req.body;
      
        const _user = new User({
          firstName,
          lastName,
          email,
          password,
          username: Math.random().toString(),
        });
    
        _user.save((error, data) => {
            if (data) {
            return res.status(201).json({
              
                user :data
              });
          }
          if (error) {
            return res.status(400).json({
              message: "Something went wrong here",
            });
          
          
           
           
          }
        });
      });


})

router.post('/signin', (req, res) => {

    User.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
          const isPassword = await user.authenticate(req.body.password);
          if (isPassword && user.role === "admin") {
            
            const token = generateJwtToken(user._id, user.role);
            const { _id, firstName, lastName, email, role, fullName } = user;
            res.status(200).json({
              token,
              user: { _id, firstName, lastName, email, role, fullName },
            });
          } else {
            return res.status(400).json({
              message: "Something went wrong here",
            });
          }
        } else {
          return res.status(400).json({ message: "Something went wrong not here" });
        }
      });

})



module.exports = router



