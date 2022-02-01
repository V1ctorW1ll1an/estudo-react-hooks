import { ChangeEvent, useMemo, useState } from "react";
import "./App.css";
import { IPosts, Post } from "./components/Post";

function App() {
    const [search, setSearch] = useState("");
    return (
        <div>
            <div>
                <input
                    type="search"
                    value={search}
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
