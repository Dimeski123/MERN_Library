import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Books = props => (
    <tr>
        <td>{props.books.title}</td>
        <td>{props.books.author}</td>
        <td>{props.books.genre}</td>
        <td>{props.books.dateCreated.substring(0,10)}</td>
        <td>{props.books.stock}</td>
        <td>
            <Link to={"/edit/"+props.books._id}>edit</Link>
        </td>
        
    </tr>
)

export default class BooksList extends Component {
    constructor(props) {
        super(props);


        this.state = {books: []};

    }
    componentDidMount() {
        axios.get('http://localhost:5000/books/')
            .then(response => {
                this.setState({books: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    bookList() {
        return this.state.books.map(currentbook => {
            return <Books books={currentbook} key={currentbook._id}/>
        })
    }

    render() { 
        return (
            <div>
                <div className="container-lg">
                    <h3>Books List</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>DateCreated</th>
                                <th>Stock</th>
                                <th>Update the stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.bookList() }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}