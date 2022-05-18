const User = require('../models/user.model');

exports.createUser = async user => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword
      }
    });
    return newUser.save();
  } catch (err) {
    throw err;
  }
};

exports.findUserByEmail = email => {
  return User.findOne({ 'local.email': email }).exec();
};

exports.findUserById = userId => {
  return User.findById(userId).exec();
};

exports.findUserByUsername = username => {
  return User.findOne({ username }).exec();
};
