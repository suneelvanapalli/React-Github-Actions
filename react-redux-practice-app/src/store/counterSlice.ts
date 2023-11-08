import {  createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    count: number
}

export const initialState: CounterState = {
    count:0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        }
    }
});

export const counterReducer =  counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions
