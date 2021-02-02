import React , { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';


export default class UpdateStock extends Component {
    constructor(props) {
        super(props);


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

    componentDidMount() {
        axios.get('http://localhost:5000/books/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    stock: response.data.stock
                })
            })
            .catch(function(error) {
                console.log(error);
            }) 
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

        axios.post('http://localhost:5000/books/update-stock/'+this.props.match.params.id, book)
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
                <h3>Update the stock of book</h3>
                
                <form onSubmit={this.onSubmit}>
                    
                    <div className ="form-group">
                        <label>New Stock:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.stock}
                            onChange={this.onChangeStock}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="UpdateStock" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}