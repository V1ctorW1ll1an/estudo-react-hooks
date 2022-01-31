import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [reverseClass, setReverseClass] = useState(false);
    const [count, setCount] = useState(0);

    const getReverseClass = (): string => (reverseClass ? "reverse" : "");
    const increment = (): void => setCount((prevCounter) => prevCounter + 1);
    const decrement = (): void => setCount((prevCounter) => prevCounter - 1);

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className={`App-logo ${getReverseClass()}`}
                    alt="logo"
                />

                <button
                    type="button"
                    onClick={() => setReverseClass(!reverseClass)}
                >
                    Reverse {getReverseClass()}
                </button>

                <div className="counter-container">
                    <p>Count: {count}</p>
                    <div className="count-buttons">
                        <button type="button" onClick={increment}>
                            Increment
                        </button>
                        <button type="button" onClick={decrement}>
                            Decrement
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
