import { createContext, FunctionComponent, useState } from "react";

interface IUser {
    name: string;
    lastName: string;
    email: string;
}

interface PropsUserContext {
    state: IUser;
    setName: (n: string) => void;
    setLastName: (ln: string) => void;
    setEmail: (e: string) => void;
}

interface IContextProviderProps {
    children: JSX.Element;
}

const INITIAL_STATE = {
    state: {
        name: "",
        lastName: "",
        email: "",
    },
    setName: (n: string) => {},
    setLastName: (ln: string) => {},
    setEmail: (e: string) => {},
};

const UserContext = createContext<PropsUserContext>(INITIAL_STATE);

const UserContextProvider: FunctionComponent<IContextProviderProps> = (
    props: IContextProviderProps
) => {
    const [state, setState] = useState<IUser>(INITIAL_STATE.state);
    function updateState(key: string, value: string) {
        setState({
            ...state,
            [key]: value,
        });
    }
    return (
        <UserContext.Provider
            value={{
                state,
                setName: (n: string) => updateState("name", n),
                setLastName: (ln: string) => updateState("lastName", ln),
                setEmail: (e: string) => updateState("lastName", e),
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
export { UserContextProvider, UserContext };
