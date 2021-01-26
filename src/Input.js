import React, { Component } from 'react';

class Input extends Component {
    state = {
        text: '',
        inputValue: '',
    };

    handleChange = event => {
        // console.log('event', event.target.value);

        let text = event.target.value;

        this.setState({
            inputValue: text,
        });
    };

    handleClick = () => {
        // console.log(this.state.inputValue);

        this.setState({
            text: this.state.inputValue,
            inputValue: '',
        });
    };

    render() {
        return (
            <div>
                <input
                    value={this.state.inputValue}
                    type="text"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Click Me</button>
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}

export default Input;
