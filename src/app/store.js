import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from '../features/toDoList/toDoListSlice.js';

export default configureStore ({
    reducer: {
        toDoList: toDoListReducer
    }
})