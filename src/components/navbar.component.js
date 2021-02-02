import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render() {
        const mystyle = {
            padding: "0px 20px"
          };
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Public Library</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item" style={mystyle}>
                            <Link to="/" className="nav-link">List With Books</Link>
                        </li>
                        
                        <li className="navbar-item" style={mystyle}>
                            <Link to="/search-genre" className="nav-link">Search Book by Genre</Link>
                        </li>
                        <li className="navbar-item" style={mystyle}>
                            <Link to="/add-book" className="nav-link">Add new Book</Link>
                        </li>
                 </ul>
                </div>
            </nav>
        )
    }
}