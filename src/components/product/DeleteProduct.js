import React, { Component } from 'react';
import Products from '../Products';
import '../../App.css';
import axios from 'axios';
import MessageDisplay from './MessageDisplay';
class DeleteProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            data: "Status Unkown"
        }
    }
    onChange = (e) => {
        this.setState({ input: e.target.value });
    }
    deleteProduct = (e) => {
        axios.delete(`http://localhost:8080/JamesIndividualProject/api/product/deleteProduct/${this.state.input}`)
            .then(r => this.setState({ data: r.data }))
        .catch(e => console.log(e))
    }
    render() {
        return (
            <div>
                <Products />
                <div id="productDelete">
                    What Do You Want To <span style={{ color: "red" }}>Delete</span>?
		            <div>
                        <span style={{ color: "red" }}>Delete</span> The Product Where The productId Matches <input
                            id="productDeleteInput" type="text" maxLength="20" onChange={this.onChange} />
                        <button id="button" type="button" onClick={this.deleteProduct}>Submit</button>
                    </div>
                    <MessageDisplay
                        message={this.state.data}
                    />
                </div>
            </div>
        );
    }
}
export default DeleteProduct;
