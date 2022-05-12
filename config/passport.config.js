const { app } = require('../app');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userQueries = require('../queries/users.queries');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await userQueries.findUserById(id);
    if (user) {
      done(null, user);
    }
  } catch (err) {
    done(err);
  }
});

passport.use(
  'local',
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await userQueries.findUserByEmail(email);
      if (user) {
        const match = await user.comparePassword(password);
        match ? done(null, user) : done(null, false, { message: 'Wrong password' });
      } else {
        done(null, false, { message: 'User not found' });
      }
    } catch (err) {
      done(err);
    }
  })
);
