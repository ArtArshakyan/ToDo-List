import React, { PureComponent } from 'react';
import C from './C';

export default class B extends PureComponent {
    constructor(props) {
        super(props);
        console.log('B constructor');
    }

    componentDidMount() {
        console.log('B componentDidMount');
    }

    componentDidUpdate() {
        console.log('B componentDidUpdate');
    }

    // shouldComponentUpdate(nextProps, nextState) {

    //     if (nextProps.data !== this.props.data) {
    //         return true;
    //     }
    //     return false;
    // }

    componentWillUnmount() {
        console.log('B componentWillUnmount');
    }

    render() {
        console.log('B render');

        return (
            <div>
                <h4>B component</h4>
                <h4>Data: {this.props.data}</h4>

                <C />
            </div>
        );
    }
}