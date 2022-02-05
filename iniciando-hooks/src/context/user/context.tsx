import { createContext, FunctionComponent, useState } from "react";

interface IUser {
    name: string;
    lastName: string;
    email: string;
}

interface PropsUserContext {
    state: IUser;
    setState: React.Dispatch<React.SetStateAction<IUser>>;
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
    setState: () => {}, //função de inicialização
};

const UserContext = createContext<PropsUserContext>(INITIAL_STATE);

const UserContextProvider: FunctionComponent<IContextProviderProps> = (
    props: IContextProviderProps
) => {
    const [state, setState] = useState<IUser>(INITIAL_STATE.state);
    return (
        <UserContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
export { UserContextProvider, UserContext };
