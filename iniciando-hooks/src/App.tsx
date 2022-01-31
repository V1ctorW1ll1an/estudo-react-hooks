import { useEffect, useState } from "react";
import "./App.css";

//https://pt-br.reactjs.org/docs/hooks-rules.html

function App() {
    const [counter, setCounter] = useState(0);

    // componentDidUpdate - executa toda vez que o component atualiza
    useEffect(() => console.log("componentDidUpdate"));

    // componentDidMount - executa uma vez quando o component é montado
    useEffect(() => console.log("componentDidMount"), []);

    // vai ser executado somente quando a sua dependência [counter] for atualizada
    useEffect(() => console.log("counter update => ", counter), [counter]);
    useEffect(() => console.log("counter update just message "), [counter]);
    useEffect(() => console.log("counter update one time :", counter), []);

    // functions
    const h1Clicked = () => console.log("h1 clicado");

    useEffect(() => {
        // isso causa um efeito colateral, pois deixa um evento cadastrado em nosso
        // component, logo precisamos limpa-lo
        const componentH1 = document.querySelector("h1");
        componentH1?.addEventListener("click", h1Clicked);

        // limpando o addEventListener
        return () => {
            componentH1?.removeEventListener("click", h1Clicked);
        };
    }, []);

    const updateCounter = () => setCounter((c) => c + 1);

    return (
        <div>
            <h1>contador: {counter}</h1>
            <button onClick={updateCounter}> + </button>
        </div>
    );
}

export default App;
