import React, { Component } from 'react';

class StockDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="results">
                <pre>Stock Id:              {this.props.id}</pre>
                <pre>Supplier:              {this.props.supplier}</pre>
                <pre>Warehouse:             {this.props.warehouse}</pre>
                <pre>Location:              {this.props.location}</pre>
                <pre>Amount:                {this.props.amount}</pre>
                <pre>Last Delivery Date:    {this.props.lastDeliveryDate}</pre>
                <pre>Next Delivery Date:    {this.props.nextDeliveryDate}</pre>
            </div>
        );
    }

}

export default StockDisplay;