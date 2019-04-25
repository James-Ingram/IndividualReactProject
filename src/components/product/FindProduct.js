import React, { Component } from 'react';
import Products from '../Products.js';
import axios from 'axios';
import '../../App.css';
import ProductDisplay from './ProductDisplay';
import * as Constants from "../Constants";
class FindProduct extends Component {
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

    findProduct = () => {
        if (this.state.input === "") {
            alert("Please Enter A Product Id");
        }
        axios.get(Constants.BASE_URL + Constants.FIND_PRODUCT_URL+`${this.state.input}`)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log(e));
    }
    render() {
        return (
            <div>
                <Products />
                <div id="productFind">
                    What Do You Want To <span style={{ color: "lime" }}>Find</span>?

                <div>Find The Product Where the productId Matches <input id="productFindInput" type="text" maxLength="20" onChange={this.onChange} required />
                    <button id="button" type="button" onClick={this.findProduct}>Submit</button>
                    </div>
                </div>
                <ProductDisplay
                    id={this.state.data.productId}
                    productName={this.state.data.productName}
                    description={this.state.data.description}
                    productLine={this.state.data.productLine}
                    price={this.state.data.price}
                    mSRP={this.state.data.mSRP}/>
            </div>
            )
    };
}

export default FindProduct;