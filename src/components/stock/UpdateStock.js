import React, { Component } from 'react';
import Stock from '../Stock.js';
import '../../App.css';
import axios from 'axios';
class UpdateStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:"",
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
        } axios.delete(`http://35.189.68.32:8080/JamesIndividualProject/api/stock/deleteStock/${this.state.input}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e))
        axios.post(`http://35.189.68.32:8080/JamesIndividualProject/api/stock/createStock/`, {
            "supplier": this.state.createInput.supplier,
            "warehouse": this.state.createInput.warehouse,
            "location": this.state.createInput.location,
            "amount": this.state.createInput.amount,
            "lastDeliveryDate": this.state.createInput.lastDeliveryDate,
            "nextDeliveryDate": this.state.createInput.nextDeliveryDate
        })
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
            </div>
        );
    }
}
export default UpdateStock;