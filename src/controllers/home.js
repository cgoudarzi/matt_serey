var express   = require('express');
    Home      = express.Router();
    mongoose  = require('mongoose');
    fs        = require('fs')

Home.route('/')
  .get(function(req, res, next) {
    res.render('Home')
  })

module.exports = Home;
