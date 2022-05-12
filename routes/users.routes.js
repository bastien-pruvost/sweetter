const router = require('express').Router();
usersCtrl = require('../controllers/users.controller');

router.get('/signup/form', usersCtrl.signupForm);
router.post('/signup', usersCtrl.signup);

module.exports = router;
