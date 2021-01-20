import React from 'react';
import './App.css';
import Product from './Product'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Product
                    name='Apple '
                    price='5$'
                    description=' Fresh apple from Armenia'
                />

                <Product
                    name='Banana '
                    price='10$'
                    description=' Fresh banana from Africa'
                />
            </header>
        </div>
    );
}

export default App;
