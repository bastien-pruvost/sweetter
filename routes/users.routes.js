const router = require('express').Router();
const usersCtrl = require('../controllers/users.controller');
const tweetQueries = require('../queries/tweets.queries');
const { ensureAuthenticated } = require('../config/guards.config');

router.get('/signup/form', usersCtrl.signupForm);
router.post('/signup', usersCtrl.signup);
router.post('/update/image', ensureAuthenticated, usersCtrl.uploadImage);

router.get('/me', async (req, res, next) => {
  const tweets = await tweetQueries.getAllTweets();
  res.render('profile.liquid', { tweets, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
});

module.exports = router;
