import { createSlice, nanoid } from "@reduxjs/toolkit";

export const toDoListSlice = createSlice({
    name: "toDoList",
    initialState: {
        toDos: localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) 
               : [
                   {id: nanoid(), text: "Do laundry", completed: false},
                   {id: nanoid(), text: "Zoom meeting at 5:00pm", completed: true},
                 ]  
    },
    reducers: {
        addToDos: (state, action) => {
            const todo = {   
                id: nanoid(),
                text: action.payload.text,
                completed: false,
            }
            state.toDos.push(todo);
            localStorage.setItem("tasks", JSON.stringify(state.toDos));
        },
        deleteToDos: (state, action) => {
            state.toDos = state.toDos.filter((todo) => todo.id !== action.payload.id);
            localStorage.setItem("tasks", JSON.stringify(state.toDos));
        },
        toggleComplete: (state, action) => {
            const index = state.toDos.findIndex((todo) => todo.id === action.payload.id);
            state.toDos[index].completed = action.payload.completed;
            localStorage.setItem("tasks", JSON.stringify(state.toDos));
        }
    }
})


export const { addToDos, deleteToDos, toggleComplete } = toDoListSlice.actions
export default toDoListSlice.reducer