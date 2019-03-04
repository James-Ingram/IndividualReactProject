import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class Stock extends Component {
    render() {
        return (
        <div>
            <nav>
                <ul id="options">
                        <li></li>
                        <li><Link to='/FindStock'>Find Stock</Link></li>
                        <li><Link to='/UpdateStock'>Update Stock</Link></li>
                        <li><Link to='/DeleteStock'>Delete Stock</Link></li>
                        <li><Link to='/CreateStock'>Create Stock</Link></li>
                        <li></li>
                    </ul>
                </nav>
            </div>

        );
    }
}
export default Stock;