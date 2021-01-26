import React, { Component } from 'react';
import Price from './Price';

class Product extends Component {
    render() {
        const { name, price, description, icon } = this.props;

        return (
            <>
                <div>{icon}</div>
                <div>Name: {name}</div>
                <Price value={price} />
                <div>Description: {description}</div>
            </>
        );
    }
}

export default Product;
