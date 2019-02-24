import React, { Component } from 'react';
import axios from 'axios';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = "hidden";
    }
    showOption = () =>{
        if (this.state.display === "none") {
            this.state.display = "hidden"
        } else {
            this.state.display = "none";
        }
    }
    render() {
        return (
        <div>
            <nav>
                <ul id="options">
                    <li></li>
                    <li><button id="button" type="button" onClick="getAllStock();">List
					    All Stock</button></li>
                    <li><button id="button" type="button"
                        onClick={this.showOption}>Find A Stock Item</button></li>
                    <li><button id="button" type="button"
                            onClick={this.showOption}>Update A Stock Item</button></li>
                    <li><button id="button" type="button"
                        onClick={this.showOption}>Delete A Stock Item</button></li>
                    <li><button id="button" type="button" onClick="showOptions('createStock');">Create A Stock Item</button></li>
                    <li></li>
                </ul> 
                </nav>
                <div id="stockSelect" className="hidden">
                    What Do You Want To <span style={{color: "lime"}}>Find</span>?
            
		<div>
                        Find The Stock Where the stockId Matches <input id="stockFindInput"
                            type="text" maxlength="20" />
                        <button id="button" type="button" onclick="findStock();">Submit</button>
                    </div>
                </div>
                <div id="stockUpdate" className="hidden">
                    What Do You Want To <span style={{color: "#ffff00"}}>Update</span>?
	</div>
                <div id="stockDelete" className="hidden">
                    <div>
                        <span style={{ color: "red" }}>Delete</span> The Stock Where The stockId Matches <input
                            id="stockDeleteInput" type="text" maxlength="20" />
                        <button id="button" type="button" onclick="deleteStock();">Submit</button>
                    </div>
                </div>
                <div id="stockCreate" className="hidden">

                    What Do You Want To <span style={{ color: "lime" }}>Create</span>?

                    <div>
                        <pre>Supplier:		<input id="stockSupplierInput" type="text" maxLength="20" /></pre>
                        <pre>Warehouse:		<input id="stockWarehouseInput" type="text" maxLength="20" /></pre>
                        <pre>Location:		<input id="stockLocationInput" type="text" maxLength="20" /></pre>
                        <pre>Amount:			<input id="stockAmountInput" type="number" maxLength="5" /></pre>
                        <pre>Last Delivery Date:	<input id="stockLastDateInput" type="text" maxLength="10" /></pre>
                        <pre>Next Delivery Date:	<input id="stockNextDateInput" type="text" maxLength="20" /></pre>
                        <button id="button" type="button" onclick="createStock();">Submit</button>
                    </div>
                </div>
                <div id="outputContainer">
                    <output id="stockOut"></output>
                </div>
            </div>

        );
    }
}
export default Stock;