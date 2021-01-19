import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // console.log('props', props);
        // this.value = 0;
        // this.handleClickPlus = this.handleClickPlus.bind(this);
        this.state = {
            value: props.defaultValue,
            text: ''
        }
    }

    handleClickPlus = () => {
        // console.log('this', this)
        this.setState({
            value: this.state.value + 1,
            text: 'Work'
        },
        () =>{
            console.log('this.state.value', this.state.value);
        });
        // this.state.value += 1;
        console.log('this.state.value', this.state.value);
    }

    handleClickMinus = () => {
        this.setState({
            value: this.state.value - 1
        });
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p>This default value is {this.props.defaultValue}</p>

                <h2>{this.state.value}</h2>

                <button
                    onClick={this.handleClickMinus}
                >
                    Count -
                </button>

                <button
                    onClick={this.handleClickPlus}
                >
                    Count +
            </button>

                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Counter;