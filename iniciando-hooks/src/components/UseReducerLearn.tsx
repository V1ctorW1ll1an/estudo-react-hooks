import { FunctionComponent, useReducer } from "react";

export enum Actions {
    Add2,
    sumWithDelta,
    changeDelta,
}
interface IReduceState {
    delta: number;
    number: number;
}

interface IReduceAction {
    type: Actions;
    payload?: any;
}

const initialState: IReduceState = {
    delta: 0,
    //
    number: 0,
};

// pega o estado atual e para cada ação (action) evolui o estado da aplicação
const reducer = (state: IReduceState, action: IReduceAction) => {
    switch (action.type) {
        case Actions.Add2:
            return { ...state, number: state.number + 2 };
        case Actions.changeDelta:
            return { ...state, delta: action.payload };
        case Actions.sumWithDelta:
            return { ...state, number: state.number + state.delta };
        default:
            return state;
    }
};

const UseReducerLearn: FunctionComponent = (): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="container">
            <div className="center d-flex justify-content-center align-items-center flex-column p-3">
                <span className="p-3">{state.number}</span>
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: Actions.Add2 })}
                >
                    +2
                </button>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() =>
                        dispatch({ type: Actions.changeDelta, payload: 10 })
                    }
                >
                    Change Delta
                </button>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => dispatch({ type: Actions.sumWithDelta })}
                >
                    Sum with Delta
                </button>
            </div>
        </div>
    );
};

export { UseReducerLearn };
