export enum Actions {
    Add2,
    sumWithDelta,
    changeDelta,
    numberMulti7,
    numberDiv25,
    numberParseInt,
    numberAddN,
}

export type ReduceAction = {
    type: Actions;
    payload?: any;
};
export type ReduceState = {
    delta: number;
    number: number;
};
// pega o estado atual e para cada ação (action) evolui o estado da aplicação
export const reducer = (state: ReduceState, action: ReduceAction) => {
    switch (action.type) {
        case Actions.Add2:
            return { ...state, number: state.number + 2 };
        case Actions.changeDelta:
            return { ...state, delta: action.payload };
        case Actions.sumWithDelta:
            return { ...state, number: state.number + state.delta };
        case Actions.numberMulti7:
            return { ...state, number: state.number * 7 };
        case Actions.numberDiv25:
            return { ...state, number: state.number / 25 };
        case Actions.numberParseInt:
            return { ...state, number: parseInt(`${state.number}`) };
        case Actions.numberAddN:
            return { ...state, number: state.number + action.payload };
        default:
            return state;
    }
};
