const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established!");
});

const booksRouter = require('./routes/books');
const genreRouter = require('./routes/genre');


app.use('/books', booksRouter);
app.use('/genre', genreRouter);

app.listen(port, () => {
    console.log('Server is running on port:');
    console.log(port);
});