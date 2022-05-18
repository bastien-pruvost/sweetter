const usersQueries = require('../queries/users.queries');
const path = require('path');
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/images/avatars'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()} - ${file.originalname}`);
    }
  })
});

exports.signupForm = (req, res, next) => {
  res.render('users/user-form', { errors: null });
};

exports.signup = async (req, res, next) => {
  console.log(req.body);
  const body = req.body;
  try {
    const user = await usersQueries.createUser(body);
    res.redirect('/');
  } catch (err) {
    res.render('users/user-form', {
      errors: [err.message],
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user
    });
  }
};

exports.uploadImage = [
  upload.single('avatar'),
  async (req, res, next) => {
    try {
      const user = req.user;
      user.avatar = `/images/avatars/${req.file.filename}`;
      await user.save();
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  }
];
