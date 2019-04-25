import React, { Component } from 'react';
import Stock from '../Stock.js';
import '../../App.css';
import axios from 'axios';
import MessageDisplay from '../MessageDisplay'; 
import * as Constants from "../Constants";
class UpdateStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Status Unknown",
            input: "",
            createInput: {
                supplier: "",
                warehouse: "",
                location: "",
                amount: "",
                lastDeliveryDate: "",
                nextDeliveryDate: ""
            },
        }
    }
    validateNum(val) {
        for (let i = 0; i < val.length; i++) {
            console.log()
            if (val.charCodeAt(i) < 48 || val.charCodeAt(i) > 57) {
                return false;
            }
        }
        return true;
    };
    updateStock = () => {
        if (!this.validateNum(this.state.createInput.amount)) {
            alert("Amount Input Contains Non-Numeric Values!")
            return;
        }
        if (this.state.createInput.supplier === "") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.warehouse === "") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.location === "") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.amount === "") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.lastDeliveryDate === "") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.nextDeliveryDate === "") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } axios.delete(Constants.BASE_URL + Constants.DELETE_STOCK_URL+`${this.state.input}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e))
        axios.post(Constants.BASE_URL + Constants.CREATE_STOCK_URL, {
            "supplier": this.state.createInput.supplier,
            "warehouse": this.state.createInput.warehouse,
            "location": this.state.createInput.location,
            "amount": this.state.createInput.amount,
            "lastDeliveryDate": this.state.createInput.lastDeliveryDate,
            "nextDeliveryDate": this.state.createInput.nextDeliveryDate
        }).then(r => this.setState({ data: r.data }))
    }
    onChange = (e) => {
        this.setState({ input: e.target.value });
    }
    onChangeSupplier = (a) => {
        this.setState({
            createInput: {
                supplier: a.target.value,
                warehouse: this.state.createInput.warehouse,
                location: this.state.createInput.location,
                amount: this.state.createInput.amount,
                nextDeliveryDate: this.state.createInput.nextDeliveryDate,
                lastDeliveryDate: this.state.createInput.lastDeliveryDate
            }
        })
    }

    onChangeWarehouse = (a) => {
        this.setState({
            createInput: {
                supplier: this.state.createInput.supplier,
                warehouse: a.target.value,
                location: this.state.createInput.location,
                amount: this.state.createInput.amount,
                nextDeliveryDate: this.state.createInput.nextDeliveryDate,
                lastDeliveryDate: this.state.createInput.lastDeliveryDate
            }
        })
    }
    onChangeLocation = (a) => {
        this.setState({
            createInput: {
                supplier: this.state.createInput.supplier,
                warehouse: this.state.createInput.warehouse,
                location: a.target.value,
                amount: this.state.createInput.amount,
                nextDeliveryDate: this.state.createInput.nextDeliveryDate,
                lastDeliveryDate: this.state.createInput.lastDeliveryDate
            }
        })
    }
    onChangeAmount = (a) => {
        this.setState({
            createInput: {
                supplier: this.state.createInput.supplier,
                warehouse: this.state.createInput.warehouse,
                location: this.state.createInput.location,
                amount: a.target.value,
                nextDeliveryDate: this.state.createInput.nextDeliveryDate,
                lastDeliveryDate: this.state.createInput.lastDeliveryDate
            }
        })
    }
    onChangeLast = (a) => {
        this.setState({
            createInput: {
                supplier: this.state.createInput.supplier,
                warehouse: this.state.createInput.warehouse,
                location: this.state.createInput.location,
                amount: this.state.createInput.amount,
                nextDeliveryDate: this.state.createInput.nextDeliveryDate,
                lastDeliveryDate: a.target.value
            }
        })
    }
    onChangeNext = (a) => {
        this.setState({
            createInput: {
                supplier: this.state.createInput.supplier,
                warehouse: this.state.createInput.warehouse,
                location: this.state.createInput.location,
                amount: this.state.createInput.amount,
                nextDeliveryDate: a.target.value,
                lastDeliveryDate: this.state.createInput.lastDeliveryDate
            }
        })
    }
    render() {
        return (
            <div>
                <Stock />
                <div
                    id="stockUpdate">What Do You Want To <span style={{ color: "#ffff00" }}>Update</span>?
                    <pre>Enter The StockID Of The Stock To Update <input id="updateInput" type="text" maxLength="20" onChange={this.onChange} /> </pre>
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
        );
    }
}
export default UpdateStock;