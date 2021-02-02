import React , { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class AddBook extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeDateCreated = this.onChangeDateCreated.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            genre: '',
            dateCreated: new Date(),
            stock: 0
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        });
    }
    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }
    onChangeDateCreated(date) {
        this.setState({
            dateCreated: date
        });
    }
    onChangeStock(e) {
        this.setState({
            stock: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const book = {
            title: this.state.title,
            author: this.state.author,
            genre: this.state.genre,
            dateCreated: this.state.dateCreated,
            stock: this.state.stock
        }

        console.log(book);

        axios.post('http://localhost:5000/books/add-book', book)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            author: '',
            genre: '',
            dateCreated: '',
            stock: ''
        })    
        window.location = '/';    
    }

    render() {
        return (
            <div className="container-lg">
                <h3>Add a book into the Library</h3>
                <form onSubmit={this.onSubmit}>
                    <div className ="form-group">
                        <label>Title:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            />
                    </div>
                    <div className ="form-group">
                        <label>Author:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor}
                            />
                    </div>
                    <div className ="form-group">
                        <label>Genre:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.genre}
                            onChange={this.onChangeGenre}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <div>
                            <DatePicker
                                selected={this.state.dateCreated}
                                onChange={this.onChangeDateCreated}
                            />
                        </div>
                    </div>
                    <div className ="form-group">
                        <label>Stock:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.stock}
                            onChange={this.onChangeStock}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="AddBook" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}