const router = require('express').Router();
let Book = require('../models/books.model');


router.route('/search-finance').get((req, res) => {
    Book.find({genre: 'Finance'})
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/search-mystery').get((req, res) => {
    Book.find({genre: 'Mystery'})
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/search-adventure').get((req, res) => {
    Book.find({genre: 'Adventure'})
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/search-drama').get((req, res) => {
    Book.find({genre: 'Drama'})
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/search-romance').get((req, res) => {
    Book.find({genre: 'Romance'})
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;