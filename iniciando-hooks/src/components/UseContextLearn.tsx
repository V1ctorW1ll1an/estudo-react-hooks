import { useContext, useState } from "react";
import { UserContext } from "../context/user/context";
import _ from "lodash";

const UseContextLearn = (): JSX.Element => {
    const { state, setState } = useContext(UserContext);
    const [name, setName] = useState<string>("");

    function handleEditName() {
        setState({
            ...state,
            name,
        });
    }

    return (
        <div className="container p-5">
            <input
                type="text"
                placeholder="Novo Nome"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                }
            />

            <button onClick={handleEditName} className="btn btn-primary ms-4">
                change data
            </button>

            <div className="mt-5">
                <p>
                    <strong>name: </strong>
                    <span>{state.name}</span>
                </p>
                <p>
                    <strong>last name: </strong>
                    <span>{state.lastName}</span>
                </p>
                <p>
                    <strong>email: </strong>
                    <span>{state.email}</span>
                </p>
            </div>
        </div>
    );
};

export { UseContextLearn };
