import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../models/todo";

export interface TodoState {
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: [],
};


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state,action: PayloadAction<string>) => {
           state.todos = state.todos.filter((item) => item.id !== action.payload);
        }
    }
});

export const todoReducer =  todoSlice.reducer;

export const { addTodo, removeTodo } = todoSlice.actions
