import React, { Component } from 'react';
import Stock from '../Stock.js';
import axios from 'axios';
import '../../App.css';
import StockDisplay from './StockDisplay';
class FindStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            data: ""

        }
    }
    onChange = (e) => {
        this.setState({ input: e.target.value });
    }
    findStock = () => {
        if (this.state.input === "") {
            alert("Please Enter A StockId!");
        }
        axios.get(`http://localhost:8080/JamesIndividualProject/api/stock/getAStock/${this.state.input}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));
    }
    render() {
        return (
            <div>
                <Stock />
                <div id="stockSelect">
                    What Do You Want To <span style={{ color: "lime" }}>Find</span>?
		        <div> Find The Stock Where the stockId Matches <input id="stockFindInput" type="text" maxLength="20" onChange={this.onChange} />
                        <button id="button" type="button" onClick={this.findStock}>Submit </button>
                </div>
                </div>
                <StockDisplay
                    id= {this.state.data.stockId}
                    supplier={this.state.data.supplier}
                    warehouse={this.state.data.warehouse}
                    location={this.state.data.location}
                    amount={this.state.data.amount}
                    lastDeliveryDate={this.state.data.lastDeliveryDate}
                    nextDeliveryDate={this.state.data.nextDeliveryDate}/>
            </div>
            
            );
    }
}

export default FindStock;