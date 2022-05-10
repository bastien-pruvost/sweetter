const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('tweets/tweet-list');
});

module.exports = router;
