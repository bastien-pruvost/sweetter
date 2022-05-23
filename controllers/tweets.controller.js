const tweetQueries = require('../queries/tweets.queries');

// -- Pages --

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await tweetQueries.getCurrentUserTweetsAndFollowingTweets(req.user);
    res.render('tweets/tweet', {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true
    });
  } catch (err) {
    next(err);
  }
};

exports.tweetNew = (req, res, next) => {
  res.render('tweets/tweet-form', { tweet: {}, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
};

exports.tweetEdit = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await tweetQueries.getTweet(tweetId);
    res.render('tweets/tweet-form', { tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  } catch (err) {
    next(err);
  }
};

// -- Methods --

exports.tweetCreate = async (req, res, next) => {
  try {
    console.log(req.user);
    const body = req.body;
    await tweetQueries.createTweet({ ...body, author: req.user._id });
    res.redirect('/tweets');
  } catch (err) {
    const errors = Object.keys(err.errors).map(key => err.errors[key].message);
    res.status(400).render('tweets/tweet-form', { errors });
  }
};

exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await tweetQueries.deleteTweet(tweetId);
    const tweets = await tweetQueries.getCurrentUserTweetsAndFollowingTweets(req.user);
    res.render('tweets/tweet-list', {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      editable: true
    });
  } catch (err) {
    next(err);
  }
};

exports.tweetUpdate = async (req, res, next) => {
  const tweetId = req.params.tweetId;
  try {
    const body = req.body;
    console.log(body);
    await tweetQueries.updateTweet(tweetId, body);
    res.redirect('/tweets');
  } catch (err) {
    const errors = Object.keys(err.errors).map(key => err.errors[key].message);
    const tweet = await tweetQueries.getTweet(tweetId);
    res
      .status(400)
      .render('tweets/tweet-form', { errors, tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  }
};
