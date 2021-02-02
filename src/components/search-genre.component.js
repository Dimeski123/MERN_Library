import React , { Component } from 'react';

export default class SearchByGenre extends Component {
    render() {
        const genres = {
            fontFamily: "Montserrat",
            fontSize: "20px",
            margin: "2px 20px"
          };
        const trback = {
            backgroundColor: "#f7f7f7",
            borderRadius: "20px"
        };
        return (
            <div>
                <div className="container-lg" style={trback}>
                    <center><h2>Genres</h2></center>
                    <center><table>
                        <tr>
                        <td><a href="/genre/adventure" style ={genres}>Adventure</a></td>
                            <td><a href="/genre/drama" style ={genres}>Drama</a></td>
                            <td><a href="/genre/finance" style ={genres}>Finance</a></td>
                            <td><a href="/genre/mystery" style ={genres}>Mystery</a></td>
                            <td><a href="/genre/romance" style ={genres}>Romance</a></td>
                        </tr>
                    </table></center>
                </div>
            </div>
        )
    }
}