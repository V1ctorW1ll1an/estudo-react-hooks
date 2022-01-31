import { useCallback, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

//https://pt-br.reactjs.org/docs/hooks-rules.html

function App() {
    console.log("pai render");
    const [counter, setCounter] = useState(0);

    // o useCallback deve ser usado quando temos uma função pesada
    // que não precisa ser renderizada novamente

    const updateCounter = useCallback(
        (value: number): void =>
            setCounter((prevCounter) => prevCounter + value),
        []
    );

    return (
        <div>
            <h1>contador: {counter}</h1>
            <Button updateCounter={updateCounter} />
        </div>
    );
}

export default App;
