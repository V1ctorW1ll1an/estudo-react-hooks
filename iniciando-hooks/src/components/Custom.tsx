import { FunctionComponent } from "react";
import { userCounter } from "../hooks/useCounter";

export const Custom: FunctionComponent = (): JSX.Element => {
    const { count, dec, inc } = userCounter(10);

    return (
        <div>
            <span>{count}</span>
            <div>
                <button onClick={() => inc()} className="btn btn-primary m-3">
                    add + 1
                </button>
            </div>
            <div>
                <button onClick={() => dec()} className="btn btn-warning m-3">
                    sub - 1
                </button>
            </div>
        </div>
    );
};
