const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: { type: String, minlength: 1, maxlength: 160, required: true }
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;
