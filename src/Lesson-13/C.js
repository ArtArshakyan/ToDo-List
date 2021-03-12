import React, { Component } from 'react';

export default class C extends Component {

    handleChange = (event) => {
        const { value } = event.target;
        // const { target: { value } } = event;

        this.props.onSendValue(value);
    };

    render() {

        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    // onChange={(event) => this.props.onSendValue(event.target.value)}
                />
            </div>
        );
    }
}