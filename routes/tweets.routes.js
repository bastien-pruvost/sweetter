const router = require('express').Router();
const tweetCtrl = require('../controllers/tweets.controller');

router.get('/', tweetCtrl.tweetList);
router.get('/new', tweetCtrl.tweetNew);
router.post('/', tweetCtrl.tweetCreate);
router.delete('/:tweetId', tweetCtrl.tweetDelete);

module.exports = router;
