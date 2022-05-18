const router = require('express').Router();
const usersCtrl = require('../controllers/users.controller');

const { ensureAuthenticated } = require('../config/guards.config');

router.get('/signup/form', usersCtrl.signupForm);
router.post('/signup', usersCtrl.signup);
router.post('/update/image', ensureAuthenticated, usersCtrl.uploadImage);
router.get('/:username', usersCtrl.userProfile);
router.get('/', usersCtrl.usersList);
module.exports = router;
