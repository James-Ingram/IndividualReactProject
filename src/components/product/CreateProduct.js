import React, { Component } from 'react';
import Products from '../Products';
import '../../App.css';
class CreateProduct extends Component {

    render() {
        return (

            <div>
                <Products/>
                <div id="productCreate">
                    What Do You Want To <span style={{color: "lime"}}>Create</span>?
		            <div>
                        <pre>Product Name: <input id="productNameInput" type="text" maxLength="20" /></pre>
                        <pre>Description:  <input id="productDescInput" type="text" maxLength="20" /></pre>
                        <pre>Product Line: <input id="productLineInput" type="text" maxLength="20" /></pre>
                        <pre>Price:        <input id="produtPriceInput" type="number" maxLength="5" /></pre>
                        <pre>MSRP:         <input id="productMSRPInput" type="number" maxLength="5" /></pre>
                        <button id="button" type="button">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProduct;