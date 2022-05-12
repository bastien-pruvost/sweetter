const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    minlength: [1, 'Sweet trop court'],
    maxlength: [320, 'Sweet trop long'],
    required: [true, 'Vous ne pouvez pas poster un sweet vide']
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;
