import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Products extends Component {
    getAllProducts = () => {
        axios.get(`http://localhost:8080/JamesIndividualProject/api/product/getAllProducts`)
            .then(r => this.setState({ data: r.data }));
    }


    showOption = () => {

    }
    deleteProduct = () => { }
    updateProduct = () => { }
    createProduct = () => { }

        render(){
        
            return (
                <div>
                    <nav id="options">
                        <ul >
                            <li></li>
                            <li><Link to='/findProduct'>Find A Product</Link></li>
                            <li><Link to='/updateProdcut'>Update A Product</Link></li>
                            <li><Link to='/deleteProduct'>Delete A Product</button></li>
                            <li><button id="button" type="button"
                                onClick={this.showOption}>Create A Product</button></li>
                            <li></li>
                        </ul>
                   </nav>
                </div >
        );
    }
}
//<li><Link to='/fin'>List All Products</button></li>
export default Products;