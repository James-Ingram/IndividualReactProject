import React, { Component } from 'react';

class ProductDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="results">
                <pre>Product Id:    {this.props.id}</pre>
                <pre>Product Name:  {this.props.productName}</pre>
                <pre>Description:   {this.props.description}</pre>
                <pre>Product Line:  {this.props.productLine}</pre>
                <pre>Price:         {this.props.price}</pre>
                <pre>MSRP:          {this.props.mSRP}</pre>
            </div>
            );
    }

}

export default ProductDisplay;