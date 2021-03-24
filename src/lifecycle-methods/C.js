import React, { Component } from 'react';

export default class C extends Component {
    constructor(props) {
        super(props);
        console.log('C constructor');
    }

    componentDidMount() {
        console.log('C componentDidMount');
    }

    componentDidUpdate() {
        console.log('C componentDidUpdate');
    }

    render() {
        console.log('C render');

        return (
            <div>
                <h4>C component</h4>
            </div>
        );
    }
}