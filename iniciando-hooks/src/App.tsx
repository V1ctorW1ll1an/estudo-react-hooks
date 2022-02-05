import "./App.css";
import { UseContextLearn } from "./components/UseContextLearn";
import { GlobalContext } from "./context";

function App(): JSX.Element {
    return (
        <GlobalContext>
            <div>
                <UseContextLearn />
            </div>
        </GlobalContext>
    );
}

export default App;
