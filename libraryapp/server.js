const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const bookRouter = require('./routes/books');

const books = require('./routes/api/books');
const error  = require('./middleware/error');
const logger = require('./middleware/logger');

const bookRender = require('./regulator/booksRender');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger);
app.use('/', indexRouter);
app.use('/books', bookRouter);
app.use('/api/books', books);
app.use(error);

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL || 'mongodb://root:example@mongo:27017';

async function start() {
  try {
    console.log(DB_URL);
    await mongoose.connect(DB_URL);
    bookRender.addBooks();

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

  } catch (error) {
    console.log(error);
  }
}

  start();