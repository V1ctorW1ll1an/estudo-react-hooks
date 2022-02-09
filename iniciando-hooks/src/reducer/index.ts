import { ReduceState } from "./reducers/index";
import { numberAdd2 } from "./actions/number";

const initialState: ReduceState = {
    delta: 0,
    //
    number: 0,
};

export { initialState, numberAdd2 };
export type { ReduceState };
