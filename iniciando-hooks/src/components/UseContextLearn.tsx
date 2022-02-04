import { useContext } from "react";
import { DataContext, IState } from "../context/dataContext";

interface IUseContextProps {
    counter?: number;
}

const UseContextLearn = (props: IUseContextProps): JSX.Element => {
    const currentContext: IState = useContext<IState>(DataContext);

    return (
        <div>
            <h1>{currentContext.text}</h1>
            <h2>{currentContext.number}</h2>
        </div>
    );
};

export { UseContextLearn };
