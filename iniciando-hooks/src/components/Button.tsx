import { memo } from "react";

type ButtonProps = {
    updateCounter: (value: number) => void;
};

const Button = memo((props: ButtonProps) => {
    console.log("filho render");
    return <button onClick={() => props.updateCounter(10)}>+</button>;
});

export { Button };
