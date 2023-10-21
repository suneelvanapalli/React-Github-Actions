import { Reducer } from "redux";



interface AppState {
    count: number;
}

const initialState: AppState = {
    count: 0
};

const rootReducer: Reducer<AppState> = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

export default rootReducer;