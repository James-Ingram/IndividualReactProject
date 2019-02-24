import React, { Component } from 'react';
import Stock from '../Stock.js';
import '../../App.css';
class UpdateStock extends Component {
    render() {
        return (
            <div>
                <Stock />   
                <div
                    id="stockUpdate">What Do You Want To <span style={{ color: "#ffff00" }}>Update</span>?
	            </div>
            </div>

        );
    }
}
export default UpdateStock;