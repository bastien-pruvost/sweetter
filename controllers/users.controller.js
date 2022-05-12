const usersQueries = require('../queries/users.queries');

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
