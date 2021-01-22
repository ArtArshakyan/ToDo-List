import React, { Component } from 'react';

class Price extends Component {
    constructor(props) {
        super(props);

        this.state = {
            price: props.value
        }
    }

    changeCurrency = () => {
        let { price } = this.state;
        let realPrice = parseFloat(price);

        price = price.includes('$') ? realPrice * 500 + '֏' : realPrice / 500 + '$';

        this.setState({
            price: price
        });
    }

    render() {
        const { price } = this.state;

        return (
            <span>
                {price}
                <button
                    onClick={this.changeCurrency}
                >
                    Change the currency
                </button>
            </span>
        )
    }
}

export default Price;