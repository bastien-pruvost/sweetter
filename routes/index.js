const router = require('express').Router();
const tweetsRoutes = require('./tweets.routes');
const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const { ensureAuthenticated } = require('../config/guards.config');

router.use('/tweets', ensureAuthenticated, tweetsRoutes);
router.use('/users', usersRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  res.redirect('/tweets');
});

module.exports = router;
