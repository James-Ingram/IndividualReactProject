import React, { Component } from 'react';
import Stock from '../Stock.js';
import '../../App.css';
import axios from 'axios';
import MessageDisplay from '../MessageDisplay';

class DeleteStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            data: "Status Unkown"
        }
    }
    onChange = (e) => {
        this.setState({ input: e.target.value });
    }
    deleteStock = (e) => {
        if (this.state.input === "") {
            alert("Please Enter A Value");
            return;
        }
        axios.delete(`http://35.189.68.32:8080/JamesIndividualProject/api/stock/deleteStock/${this.state.input}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e))
    }
	render() {
		return (
            <div>
                <Stock />
                <div id="stockDelete">
                    <div>
                        <span style={{ color: "red" }}>Delete</span> The Stock Where The stockId Matches <input
                            id="stockDeleteInput" type="text" maxLength="20" onChange={this.onChange +9+}/>
                        <button id="button" type="button" onClick={this.deleteStock}>Submit</button>
                    </div>
                    <MessageDisplay
                        message={this.state.data}
                    />
                </div>
            </div>
            );
	}
}

export default DeleteStock;