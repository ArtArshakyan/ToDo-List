import React, { Component } from 'react';
import B from './B';
import D from './D';

export default class A extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            message: '',
            counter: 0
        };

        console.log('A constructor');
    }

    componentDidMount() {
        console.log('A componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('A componentDidUpdate');

        console.log('A prevProps', prevProps);
        console.log('A this.props', this.props);

        console.log('A prevState', prevState);
        console.log('A this.state', this.state);

        if (prevState.value !== this.state.value) {
            this.setState({
                message: "The value has changed!"
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);

        if (nextState.counter < 5) {
            return true;
        }
        return false;
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        console.log('A render');

        return (
            <div>
                <h4>A component</h4>

                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <button
                    onClick={this.handleClick}
                >
                    Increase Counter
                </button>

                <h3>{this.state.message}</h3>
                <h4>Counter : {this.state.counter}</h4>

                {
                    this.state.counter !== 2 &&
                    <B data={this.state.counter} />
                }

                <D />

            </div>
        );
    }
}