const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  genre: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  dateCreated: {
      type: Date,
      required:true
  },
  stock: {
      type: Number,
      required: true
  }, 
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;