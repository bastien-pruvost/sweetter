const express = require('express');
const morgan = require('morgan');
const path = require('path');
const errorhandler = require('errorhandler');
const routing = require('./routes');
require('./database');

const port = process.env.PORT || 3000;
const app = express();

exports.app = app;

// Render Liquid
const { Liquid } = require('liquidjs');
const engine = new Liquid();
app.engine('liquid', engine.express());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'liquid');
// ---

// Main middlewares
app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ---

require('./config/session.config');
require('./config/passport.config');

// Use router
app.use(routing);
// ---

// Manage errors
// if (process.env.NODE_ENV === 'development') {
//   app.use(errorhandler());
// } else {
//   app.use((err, req, res, next) => {
//     const code = err.code || 500;
//     res.status(code).json({
//       code: code,
//       message: code === 500 ? null : err.message
//     });
//   });
// }
// ---

// Listen request
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// ---
