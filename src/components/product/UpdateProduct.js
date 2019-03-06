import React, { Component } from 'react';
import Products from '../Products';
import '../../App.css';
import axios from 'axios';
import MessageDisplay from '../MessageDisplay';
class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Status Unknown",
            input: "",
            createInput: {
                productName: "default",
                description: "default",
                productLine: "default",
                price: "000",
                mSRP: "000"
            },
        }
    } validateNum(val) {
        for (let i = 0; i < val.length; i++) {
            console.log()
            if (val.charCodeAt(i) < 48 || val.charCodeAt(i) > 57) {
                return false;
            }
        }
        return true;
    };
    updateProduct = () => {
        if (!this.validateNum(this.state.createInput.price)) {
            alert("Price Input Contains Non-Numeric Values!")
            return;
        } else if (!this.validateNum(this.state.createInput.mSRP)) {
            alert("MSRP Input Contains Non-Numeric Values!")
            return;
        }
        if (this.state.createInput.productName === "default") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.description === "default") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.productLine === "default") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.price === "000") {
            alert("One Of The Required Fields Is Empty!");
            return;
        } else if (this.state.createInput.mSRP === "000") {
            alert("One Of The Required Fields Is Empty!");
            return;
        }
        if (this.state.input === "") {
            alert("Please Enter A Value");
            return;
        }
        axios.delete(`http://35.189.68.32:8080/JamesIndividualProject/api/product/deleteProduct/${this.state.input}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e))
        axios.post('http://35.189.68.32:8080/JamesIndividualProject/api/product/createProduct/', {
            "productName": this.state.createInput.productName,
            "description": this.state.createInput.description,
            "productLine": this.state.createInput.productLine,
            "price": this.state.createInput.price,
            "mSRP": this.state.createInput.mSRP
        })
            .then();
    }
    onChange = (e) => {
        this.setState({ input: e.target.value });
    }
    onChangeName = (a) => {
        this.setState({
            createInput: {
                productName: a.target.value,
                description: this.state.createInput.description,
                productLine: this.state.createInput.productLine,
                price: this.state.createInput.price,
                mSRP: this.state.createInput.mSRP
            }
        })
    };
    onChangeDesc = (b) => {
        this.setState({
            createInput: {
                productName: this.state.createInput.productName,
                description: b.target.value,
                productLine: this.state.createInput.productLine,
                price: this.state.createInput.price,
                mSRP: this.state.createInput.mSRP
            }
        });
    };
    onChangeLine = (c) => {
        this.setState({
            createInput: {
                productName: this.state.createInput.productName,
                description: this.state.createInput.description,
                productLine: c.target.value,
                price: this.state.createInput.price,
                mSRP: this.state.createInput.mSRP
            }
        });
    };
    onChangePrice = (d) => {
        this.setState({
            createInput: {
                productName: this.state.createInput.productName,
                description: this.state.createInput.description,
                productLine: this.state.createInput.productLine,
                price: d.target.value,
                mSRP: this.state.createInput.mSRP
            }
        });
    };
    onChangeMSRP = (e) => {
        this.setState({
            createInput: {
                productName: this.state.createInput.productName,
                description: this.state.createInput.description,
                productLine: this.state.createInput.productLine,
                price: this.state.createInput.price,
                mSRP: e.target.value
            }
        });
    };

    render() {
        return (
            <div>
                <Products />
                <div id="productUpdate" >
                    What Do You Want To <span style={{ color: "#ffff00" }}>Update</span>?

                     <div>
                        <pre>Enter The ProductID Of The Product To Update <input id="updateInput" type="text" maxLength="20" onChange={this.onChange} /> </pre>
                        <pre>Product Name: <input id="updateNameInput" type="text" maxLength="20" onChange={this.onChangeName} /></pre>
                        <pre>Description:  <input id="updateDescInput" type="text" maxLength="20" onChange={this.onChangeDesc} /></pre>
                        <pre>Product Line: <input id="updateLineInput" type="text" maxLength="20" onChange={this.onChangeLine} /></pre>
                        <pre>Price:        <input id="updatePriceInput" type="text" pattern="^[0-9]$" maxLength="5" onChange={this.onChangePrice} /></pre>
                        <pre>MSRP:         <input id="updateMSRPInput" type="text" pattern="^[0-9]$" maxLength="5" onChange={this.onChangeMSRP} /></pre>
                        <button id="button" type="button" onClick={this.updateProduct}>Submit</button>
                    </div>
                </div>
                <MessageDisplay
                        message={this.state.data}
                    />
            </div>
        );
    }
}
export default UpdateProduct;