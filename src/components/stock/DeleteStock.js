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
                            id="stockDeleteInput" type="text" maxLength="20" onChange={this.onChange}/>
                        <button id="button" type="button" onClick={this.deleteStock}>Submit</button>
                    </div>
                    <pre>Supplier:		<input id="stockSupplierInput" type="text" maxLength="20" onChange={this.onChangeSupplier} /></pre>
                    <pre>Warehouse:		<input id="stockWarehouseInput" type="text" maxLength="20" onChange={this.onChangeWarehouse} /></pre>
                    <pre>Location:		<input id="stockLocationInput" type="text" maxLength="20" onChange={this.onChangeLocation} /></pre>
                    <pre>Amount:			<input id="stockAmountInput" type="text" maxLength="5" onChange={this.onChangeAmount} /></pre>
                    <pre>Last Delivery Date:	<input id="stockLastDateInput" type="text" maxLength="10" onChange={this.onChangeLast} /></pre>
                    <pre>Next Delivery Date:	<input id="stockNextDateInput" type="text" maxLength="20" onChange={this.onChangeNext} /></pre>
                    <button id="button" type="button" onClick={this.updateStock}>Submit</button>
                    <MessageDisplay
                        message={this.state.data}
                    />
                </div>
            </div>
            );
	}
}

export default DeleteStock;