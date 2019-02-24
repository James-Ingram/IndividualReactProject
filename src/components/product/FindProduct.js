import React, { Component } from 'react';
import Products from '../Products.js';

class FindProduct extends Component {
    findProduct = () => { }
    render() {
        return (
            <div>
                <Products />
                <div id="productFind">
                    What Do You Want To <span style={{ color: "lime" }}>Find</span>?
                
                <div>Find The Product Where the productId Matches <input id="productFindInput" type="text" maxLength="20" />
                    <button id="button" type="button" onClick={this.findProduct}>Submit</button>
                    </div>
                </div>
            </div>
        
            )
    };
}

export default FindProduct;