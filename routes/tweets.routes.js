const router = require('express').Router();
const tweetCtrl = require('../controllers/tweets.controller');

// Get pages
router.get('/', tweetCtrl.tweetList);
router.get('/new', tweetCtrl.tweetNew);
router.get('/edit/:tweetId', tweetCtrl.tweetEdit);

// Methods
router.post('/', tweetCtrl.tweetCreate);
router.delete('/:tweetId', tweetCtrl.tweetDelete);
router.post('/update/:tweetId/', tweetCtrl.tweetUpdate);

module.exports = router;
