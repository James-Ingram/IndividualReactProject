import React, { Component } from 'react';

class MessageDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="message">
                <pre>{this.props.message}</pre>
            </div>
        );
    }
}
export default MessageDisplay;
