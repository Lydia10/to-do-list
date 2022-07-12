import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToDos } from './toDoListSlice';
import "./ToDos.css";
import ToDoItem from './ToDoItem';


function ToDos(){
  const [input, setInput] = useState("");
  const toDos = useSelector(state => state.toDoList.toDos);
  const dispatch = useDispatch();
  console.log(toDos);
  
  const handleAddToDos = (e) => {
    e.preventDefault();

    if(input === ""){
      alert("Please add a task");
    }
    else{
      dispatch(addToDos({text: input}));
    }
  }

  return (
    <div className='container'>
      <h1 className='mb-4 text-center mt-4'>To-Do List</h1>
      <div className='d-flex justify-content-center mb-5'>
        <form onSubmit={handleAddToDos}>
          <input type="text" className='input mx-auto' onChange={(e) => setInput(e.target.value)} placeholder="Add a task..."></input>
          <button className='add__button w-25'>Add</button>
        </form> 
      </div>
      <ul className='list-group w-75 mx-auto'>
        {toDos.length > 0 && toDos.map(todo => <ToDoItem key={todo.id} text={todo.text} id={todo.id} completed={todo.completed} />)}
      </ul>
    </div>
  )
}


export default ToDos