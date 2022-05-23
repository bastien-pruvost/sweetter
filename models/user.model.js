const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = schema({
  username: { type: String, required: true, unique: true },
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  avatar: { type: String, default: 'sweetter-profile-pics/profile-pic.png' },
  following: { type: [schema.Types.ObjectId], ref: 'user' },
  followers: { type: [schema.Types.ObjectId], ref: 'user' }
});

userSchema.statics.hashPassword = password => {
  return bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.local.password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;
