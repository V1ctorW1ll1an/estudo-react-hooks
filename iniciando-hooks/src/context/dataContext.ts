import { createContext } from "react";
export interface IState {
    number: number;
    text: string;
}

const state: IState = {
    number: 123,
    text: "Context API...",
};

const DataContext = createContext<IState>(state);

export { state, DataContext };
