import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
        render(){
        
            return (
                <div>
                    <nav id="options">
                        <ul >
                            <li></li>
                            <li><Link to='/FindProduct'>Find A Product</Link></li>
                            <li><Link to='/UpdateProduct'>Update A Product</Link></li>
                            <li><Link to='/DeleteProduct'>Delete A Product</Link></li>
                            <li><Link to='/CreateProduct'>Create A Product</Link></li>
                            <li></li>
                        </ul>
                   </nav>
                </div >
        );
    }
}
//<li><Link to='/fin'>List All Products</button></li>
export default Products;