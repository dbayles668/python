import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [

    ],        
    },
    reducers: {
        createTodo: (state, action) => {
            state.value = [...state.value, {text: action.payload, isCompleted: false}];
        },
        markTodoAsCompleted: (state, action) => {
            const text = action.payload;
            const todo = state.value.find(t => t.text === text);
            todo.isCompleted = true;
        },
        deleteTodo: (state, action) => {
            const text = action.payload;
            state.value = state.value.filter(t => t.text !== text);            
        },
    }
});

export const { createTodo, markTodoAsCompleted, deleteTodo} = todosSlice.actions;