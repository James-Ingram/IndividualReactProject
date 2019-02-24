import React, { Component } from 'react';
import Products from '../Products';
import '../../App.css';
class DeleteProduct extends Component {
    render() {
        return (
            <div>
                <Products />
                <div id="productDelete">
                    What Do You Want To <span style={{ color: "red" }}>Delete</span>?
		            <div>
                        <span style={{ color: "red" }}>Delete</span> The Product Where The productId Matches <input
                            id="productDeleteInput" type="text" maxLength="20" />
                        <button id="button" type="button">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default DeleteProduct;
