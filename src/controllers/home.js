var express     = require('express');
    Home        = express.Router();
    Submission  = require('../models/submission');
    mongoose    = require('mongoose');
    fs          = require('fs');
    helper      = require('sendgrid').mail
    

Home.route('/submissions')
  .get(function(req, res, next) {
    Submission.find({}, function(err, submissions) {
      var list = submissions;
      res.send(list)
    })
  });

Home.route('/reel-1')
  .get(function(req, res, next) {
    res.render('reel-1')
  });

Home.route('/cv')
  .get(function(req, res, next) {
    res.render('cv')
  });

Home.route('/contact') 
  .get(function(req, res, next) {
    res.render('contact')
  })

  .post(function(req, res, next) {
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.subject);
    console.log(req.body.message);
    Submission.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    },
    function (error, submission) {
      if (error) {
        console.log(error);
      } else {
        console.log(submission);
        res.redirect('/');
      }
    });

    from_email = new helper.Email(req.body.email);
    to_email   = new helper.Email(process.env.EMAIL);
    subject    =     req.body.subject;
    content    = new helper.Content("text/plain", "Name: " + req.body.name + "\n\nMessage: " + req.body.message);
    mail       = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    })
  });

Home.route('/about-me')
  .get(function(req, res, next) {
    res.render('about')
  });

Home.route('/')
  .get(function(req, res, next) {
    res.render('home')
  });

module.exports = Home;
