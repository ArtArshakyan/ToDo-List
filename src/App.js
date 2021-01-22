import React from 'react';
import './App.css';
import Product from './Product';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    1:<Product
                        name='Apple '
                        price='1$'
                        description=' Fresh apple from Armenia'
                    />
                </div>

                <div>
                    2:<Product
                        name='Banana '
                        price='2$'
                        description=' Fresh apple from Ecuador'
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
