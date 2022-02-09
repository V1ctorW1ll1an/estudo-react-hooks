import { Actions, ReduceAction } from "../reducers";

export const numberAdd2 = (dispatch: CallableFunction): void => {
    const reducerCreate: ReduceAction = { type: Actions.Add2 };
    dispatch(reducerCreate);
};
