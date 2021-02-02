const router = require('express').Router();
let Book = require('../models/books.model');

router.route('/').get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/update-stock/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then(books => {
      books.stock = Number(req.body.stock);

      books.save()
        .then(() => res.json('Stock Updated!'))
        .catch(err => res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add-book').post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const genre = req.body.genre;
  const dateCreated = Date.parse(req.body.dateCreated);
  const stock = Number(req.body.stock);

  const newBook = new Book({
      title,
      author,
      genre,
      dateCreated,
      stock,
  })

  newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;