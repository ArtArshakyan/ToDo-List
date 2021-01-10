import React from 'react';
import './App.css';
import Greeting from './Greeting';
import User from './User';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Greeting />

                <User
                    name='Alex'
                    surname='Doe'
                    age={25}
                />

                <User
                    name='John'
                    surname='Smit'
                    age={35}
                />

                <User
                    name='Sarah'
                    age={40}
                    href='https://google.com'
                    className='my-div'
                />

            </header>
        </div>
    );
}

export default App;