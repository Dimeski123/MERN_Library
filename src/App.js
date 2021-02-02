import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import BooksList from "./components/books-list.component";
import SearchByGenre from "./components/search-genre.component";
import AddBook from "./components/add-book.component";
import UpdateStock from "./components/update-stock.component";
import Adventure from "./components/genre/adventure.component";
import Drama from "./components/genre/drama.component";
import Finance from "./components/genre/finance.component";
import Mystery from "./components/genre/mystery.component";
import Romance from "./components/genre/romance.component";


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={BooksList} />
      <Route path="/search-genre" exact component={SearchByGenre} />
      <Route path="/add-book" exact component={AddBook} />
      <Route path="/edit/:id" exact component={UpdateStock} />
      <Route path="/genre/adventure" exact component={Adventure} />
      <Route path="/genre/drama" exact component={Drama} />
      <Route path="/genre/finance" exact component={Finance} />
      <Route path="/genre/mystery" exact component={Mystery} />
      <Route path="/genre/romance" exact component={Romance} />
    </Router>
  );
}

export default App;
