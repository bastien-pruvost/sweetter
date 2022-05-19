const router = require('express').Router();
const usersCtrl = require('../controllers/users.controller');

const { ensureAuthenticated } = require('../config/guards.config');

router.get('/', usersCtrl.usersList);
router.get('/follow/:userId', usersCtrl.userFollow);
router.get('/unfollow/:userId', usersCtrl.userUnfollow);
router.get('/signup/form', usersCtrl.signupForm);
router.get('/:username', usersCtrl.userProfile);

router.post('/signup', usersCtrl.signup);
router.post('/update/image', ensureAuthenticated, usersCtrl.uploadImage);

module.exports = router;
