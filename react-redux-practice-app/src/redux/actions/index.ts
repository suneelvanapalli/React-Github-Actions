import { Action } from "redux";

export const increment = (): Action => ({
    type: 'INCREMENT'
});


export const decrement = (): Action => ({
    type: 'DECREMENT'
});