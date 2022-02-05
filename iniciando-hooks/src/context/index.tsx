import { FunctionComponent } from "react";
import { UserContextProvider } from "./user/context";

interface IIndexProps {
    children: JSX.Element;
}

const GlobalContext: FunctionComponent<IIndexProps> = (
    props: IIndexProps
): JSX.Element => {
    return (
        // <> é uma abreviação para React.Fragment permitindo que você tenha
        // vários elementos superiores sem envolver mais HTML.
        // ou seja, é uma tag que vc não quer que aparece no seu html
        <>
            <UserContextProvider>{props.children}</UserContextProvider>;
        </>
    );
};

export { GlobalContext };
