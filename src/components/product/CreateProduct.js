import React, { Component } from 'react';
import Products from '../Products';
import '../../App.css';
import axios from 'axios';
class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createInput: {
                productName: "default",
                description: "default",
                productLine: "default",
                price: "000",
                mSRP: "000"
            },
        }
    }
    createProduct = () => {
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
        axios.post('http://35.189.68.32:8080/JamesIndividualProject/api/product/createProduct/', {
            "productName": this.state.createInput.productName,
            "description": this.state.createInput.description,
            "productLine": this.state.createInput.productLine,
            "price": this.state.createInput.price,
            "mSRP": this.state.createInput.mSRP
        })
            .then();
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
                <div id="productCreate">
                    What Do You Want To <span style={{ color: "lime" }}>Create</span>?
		            <div>
                        <pre>Product Name: <input id="productNameInput" type="text" maxLength="20" onChange={this.onChangeName}     /></pre>
                        <pre>Description:  <input id="productDescInput" type="text" maxLength="20" onChange={this.onChangeDesc}     /></pre>
                        <pre>Product Line: <input id="productLineInput" type="text" maxLength="20" onChange={this.onChangeLine}     /></pre>
                        <pre>Price:        <input id="produtPriceInput" type="number" min="0" max="9999" onChange={this.onChangePrice}   /></pre>
                        <pre>MSRP:         <input id="productMSRPInput" type="number" min="0" max="9999" onChange={this.onChangeMSRP}    /></pre>
                        <button id="button" type="button" onClick={this.createProduct}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProduct;