import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataContext, state } from "./context/dataContext";

ReactDOM.render(
    <React.StrictMode>
        <DataContext.Provider value={state}>
            <App />
        </DataContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
