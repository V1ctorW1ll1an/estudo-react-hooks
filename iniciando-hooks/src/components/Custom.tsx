import { FunctionComponent } from "react";
import { userCounter } from "../hooks/useCounter";
import { Method, useFetch } from "../hooks/useFetch";

export const Custom: FunctionComponent = (): JSX.Element => {
    const { count, dec, inc } = userCounter(10);
    const url = "http://files.cod3r.com.br/curso-react/estados.json";

    const stateFetch = useFetch(url, Method.GET);

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

            <h2 className="m-3">Fetch</h2>
            <div className="m-2">
                <ul>
                    {stateFetch.data.map((state) => {
                        return (
                            <li>
                                {state.nome} - {state.sigla}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
