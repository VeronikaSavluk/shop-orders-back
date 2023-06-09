const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const shopsRouter = require('./routes/shops');
const ordersRouter = require('./routes/orders');
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(shopsRouter);
app.use(ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const {status = 500} = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;