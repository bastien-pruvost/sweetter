const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes/');
require('./database');

const port = process.env.PORT || 3000;
const app = express();

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

app.use(index);

app.listen(port);
