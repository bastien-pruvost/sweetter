const usersQueries = require('../queries/users.queries');
const tweetQueries = require('../queries/tweets.queries');
const { uploadCloudinary, deleteCloudinary } = require('../config/cloudinary.config');
const authCtrl = require('../controllers/auth.controller');

exports.signupForm = (req, res, next) => {
  res.render('users/user-form', { errors: null });
};

exports.signup = async (req, res, next) => {
  const body = req.body;
  try {
    const user = await usersQueries.createUser(body);
    authCtrl.signin(req, res, next);
    // res.redirect('/');
  } catch (err) {
    res.render('users/user-form', {
      errors: [err.message],
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user
    });
  }
};

exports.uploadImage = [
  uploadCloudinary.single('avatar'),
  async (req, res, next) => {
    try {
      const user = req.user;
      if (user.avatar !== 'sweetter-profile-pics/profile-pic.png') {
        deleteCloudinary(user.avatar);
      }
      user.avatar = req.file.filename;
      await user.save();
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  }
];

exports.userProfile = async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await usersQueries.findUserByUsername(username);
    const tweets = await tweetQueries.getUserTweetsByUserId(user._id);
    res.render('profile', {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: user,
      editable: true
    });
  } catch (err) {
    next(err);
  }
};

exports.usersList = async (req, res, next) => {
  try {
    const search = req.query.search;
    const users = await usersQueries.searchUsersByUsername(search);
    res.render('includes/search-menu', { users });
  } catch (err) {
    next(err);
  }
};

exports.userFollow = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const [, , user] = await Promise.all([
      usersQueries.addUserIdToCurrentUserFollowing(req.user, userId),
      usersQueries.addCurrentUserIdToUserFollowers(req.user, userId),
      usersQueries.findUserById(userId)
    ]);
    res.redirect(`/users/${user.username}`);
  } catch (err) {
    next(err);
  }
};
exports.userUnfollow = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const [, , user] = await Promise.all([
      usersQueries.removeUserIdFromCurrentUserFollowing(req.user, userId),
      usersQueries.removeCurrentUserIdFromUserFollowers(req.user, userId),
      usersQueries.findUserById(userId)
    ]);
    res.redirect(`/users/${user.username}`);
  } catch (err) {
    next(err);
  }
};
