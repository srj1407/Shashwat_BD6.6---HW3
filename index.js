const express = require('express');
const app = express();
const cors = require('cors');
const { getAllBooks, getBookById } = require('./controllers/index.js');

app.use(express.json());
app.use(cors());

app.get('/books', async (req, res) => {
  const books = getAllBooks();
  res.json({ books });
});

app.get('/books/details/:id', async (req, res) => {
  let book = getBookById(parseInt(req.params.id));
  res.json({ book });
});

module.exports = {
  app,
};
