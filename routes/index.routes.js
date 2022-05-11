const router = require('express').Router();
const tweets = require('./tweets.routes');

router.use('/tweets', tweets);
router.get('/', (req, res) => {
  res.redirect('/tweets');
});

module.exports = router;
