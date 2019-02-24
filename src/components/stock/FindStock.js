import React, { Component } from 'react';
import Stock from '../Stock.js';
import '../../App.css';
class FindStock extends Component {
    render() {
        return (
            <div>
                <Stock />
                <div id="stockSelect">
                    What Do You Want To <span style={{ color: "lime" }}>Find</span>?
		        <div> Find The Stock Where the stockId Matches <input id="stockFindInput" type="text" maxLength="20" />
                <button id="button" type="button">Submit</button>
                </div>
                </div>
            </div>
            
            );
    }
}

export default FindStock;