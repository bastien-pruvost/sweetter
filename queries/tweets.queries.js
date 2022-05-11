const Tweet = require('../models/tweet.model');

exports.getAllTweets = () => {
  return Tweet.find({}).exec();
};

exports.createTweet = tweet => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
};

exports.deleteTweet = tweetId => {
  return Tweet.findByIdAndDelete(tweetId).exec();
};
