import { FunctionComponent, useReducer } from "react";
import { initialState } from "../reducer";
import { Actions, reducer } from "../reducer/reducers";

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
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => dispatch({ type: Actions.numberMulti7 })}
                >
                    *7
                </button>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => dispatch({ type: Actions.numberDiv25 })}
                >
                    /25
                </button>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => dispatch({ type: Actions.numberParseInt })}
                >
                    int
                </button>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() =>
                        dispatch({ type: Actions.numberAddN, payload: 100 })
                    }
                >
                    Add 100
                </button>
            </div>
        </div>
    );
};

export { UseReducerLearn };
