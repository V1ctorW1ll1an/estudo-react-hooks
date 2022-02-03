import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { IPosts, Post } from "./components/Post";

function App() {
    const [search, setSearch] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
        console.log(inputRef.current);
    }, [search]);

    return (
        <div>
            <div>
                <input
                    type="search"
                    value={search}
                    ref={inputRef}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSearch(e.target.value)
                    }
                />
            </div>
            {useMemo(() => {
                return <Post />;
            }, [])}
        </div>
    );
}

export default App;
