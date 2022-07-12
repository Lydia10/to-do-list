import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDos, toggleComplete} from './toDoListSlice';
import './ToDoItem.css';

function ToDoItem(props){
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({id: props.id, completed: !props.completed}));
  }

  return (
    <li className={`to__do__item d-flex justify-content-between align-items-center list-group-item ${props.completed && "list-group-item-success"}`}>
      <input type="checkbox" className='checkbox' checked={props.completed} onChange={handleCompleteClick}/>
      { props.completed ? <del className='h5'>{props.text}</del> : <span className='h5 text'>{props.text}</span> }
      <i className="fa fa-trash fa-2x trash-color trash" onClick={() => dispatch(deleteToDos({id: props.id}))}></i>
    </li>
  )
}

export default ToDoItem