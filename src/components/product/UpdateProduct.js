import React, { Component } from 'react';
import Products from '../Products';
import '../../App.css';
class UpdateProduct extends Component {
    render() {
        return (
            <div>
                <Products />
                <div id="productUpdate" >
                    What Do You Want To <span style={{ color: "#ffff00" }}>Update</span>?
	            </div>
            </div>
        );
    }
}
export default UpdateProduct;