import { useEffect, useState } from "react";
export enum Method {
    GET = "get",
    POST = "post",
    DELETE = "delete",
}

interface ICountry {
    nome: string;
    sigla: string;
}

interface IState {
    data: Array<ICountry>;
    loading: boolean;
}

export const useFetch = (url: string, method: string = Method.GET) => {
    const [state, setState] = useState<IState>({
        data: [],
        loading: false,
    });

    useEffect(() => {
        fetch(url, { method })
            .then((resp) => resp.json())
            .then((json) => setState({ data: json, loading: false }));
    }, [url, method]);

    return state;
};
