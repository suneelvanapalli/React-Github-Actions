import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  initialState } from "../redux/reducers/counterReducer";
import { Todo } from "../models/todo";

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state,action: PayloadAction<string>) => {
            state.todos.filter((item) => item.id !== action.payload);
        }
    }
});

export default todoSlice.reducer;

export const { addTodo, removeTodo } = todoSlice.actions
