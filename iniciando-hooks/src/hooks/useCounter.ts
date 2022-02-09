import { useState } from "react";

type TUseCounter = {
    count: number;
    inc: CallableFunction;
    dec: CallableFunction;
};

export const userCounter = (initialValue: number): TUseCounter => {
    const [count, setCount] = useState(initialValue);

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    return { count, inc, dec };
};
