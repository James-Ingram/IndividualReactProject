import React, { Component } from 'react';
import Stock from '../Stock.js';

class DeleteStock extends Component {
	render() {
		return (
            <div>
                <Stock />
                <div id="stockDelete">
                    <div>
                        <span style={{ color: "red" }}>Delete</span> The Stock Where The stockId Matches <input
                            id="stockDeleteInput" type="text" maxLength="20" />
                        <button id="button" type="button">Submit</button>
                    </div>
                </div>

            </div>
            );
	}
}

export default DeleteStock;