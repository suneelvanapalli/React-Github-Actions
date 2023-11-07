import {  createSlice } from "@reduxjs/toolkit";
import {  initialState } from "../redux/reducers/counterReducer";

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

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions
