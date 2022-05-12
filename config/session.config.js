const session = require('express-session');
const MongoStore = require('connect-mongo');
const { clientP } = require('../database');
const { app } = require('../app');

app.use(
  session({
    secret: 'SECRET_WORD',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 14 // 14 days (in ms)
    },
    store: MongoStore.create({
      clientPromise: clientP,
      ttl: 60 * 60 * 24 * 14 // 14 days (in s)
    })
  })
);
