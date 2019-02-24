import React, { Component } from 'react';
import Stock from '../Stock.js';
import '../../App.css';
class CreateStock extends Component {
	render() {
		return (
            <div>
                <Stock />
                <div id="stockCreate">
                    What Do You Want To <span style={{ color: "lime" }}>Create</span>?
                    <div>
                        <pre>Supplier:		<input id="stockSupplierInput" type="text" maxLength="20" /></pre>
                        <pre>Warehouse:		<input id="stockWarehouseInput" type="text" maxLength="20" /></pre>
                        <pre>Location:		<input id="stockLocationInput" type="text" maxLength="20" /></pre>
                        <pre>Amount:			<input id="stockAmountInput" type="number" maxLength="5" /></pre>
                        <pre>Last Delivery Date:	<input id="stockLastDateInput" type="text" maxLength="10" /></pre>
                        <pre>Next Delivery Date:	<input id="stockNextDateInput" type="text" maxLength="20" /></pre>
                        <button id="button" type="button" >Submit</button>
                    </div>
                </div>
            </div>
            
            );
	}
}

export default CreateStock;