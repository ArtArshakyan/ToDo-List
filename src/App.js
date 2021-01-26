import React from 'react';
import './App.css';
import Product from './Product';
import Input from './Input';

const fruits = [
    {
        name: 'Apple',
        price: '1.3$',
        desc: 'fresh Apple from Armenia',
        icon: '🍏',
    },
    {
        name: 'Banana',
        price: '2.3$',
        desc: 'fresh Banana from Africa',
        icon: '🍌',
    },
    {
        name: 'Orange',
        price: '2.8$',
        desc: 'Golden Orange',
        icon: '🍊',
    },
];

function App() {
    const li = fruits.map((fruit, index) => {
        return (
            <li key={index}>
                <Product
                    name={fruit.name}
                    price={fruit.price}
                    description={fruit.desc}
                    icon={fruit.icon}
                />
                <br />
            </li>
        );
    });

    // console.log('li', li);

    //   let li = [
    //     <li>{fruits[0]}</li>,
    //     <li>{fruits[1]}</li>,
    //     <li>{fruits[2]}</li>,
    //     <li>{fruits[3]}</li>
    //   ];

    return (
        <div className="App">
            <Input />

            <header className="App-header">
                <ol>{li}</ol>
            </header>
        </div>
    );
}

export default App;
