import React, { Component } from 'react';

export default class B extends Component {

    render() {

        return (
            <div>
                <h2>{this.props.value}</h2>
            </div>
        );
    }
}