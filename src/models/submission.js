var mongoose = require('mongoose');

var SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

module.exports = mongoose.model('Submission', SubmissionSchema);
