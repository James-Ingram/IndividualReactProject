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
                price: "420",
                mSRP: "420"
            },
        }
    }
    createProduct = () => {
        axios.post('http://localhost:8080/JamesIndividualProject/api/product/createProduct/', {
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
                        <pre>Price:        <input id="produtPriceInput" type="number" maxLength="5" onChange={this.onChangePrice}   /></pre>
                        <pre>MSRP:         <input id="productMSRPInput" type="number" maxLength="5" onChange={this.onChangeMSRP}    /></pre>
                        <button id="button" type="button" onClick={this.createProduct}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProduct;