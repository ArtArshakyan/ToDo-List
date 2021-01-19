import './App.css';
import Counter from './Counter'

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <Counter
                    title="The Counter N1"
                    defaultValue={30}
                />

            </header>
        </div>
    );
}

export default App;
