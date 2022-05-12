const router = require('express').Router();
const authCtrl = require('../controllers/auth.controller');

router.get('/signin/form', authCtrl.signinForm);
router.post('/signin', authCtrl.signin);
router.get('/signout', authCtrl.signout);

module.exports = router;
