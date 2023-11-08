// import { useRef, useContext, useState } from 'react';
import { Todo } from '../../models/todo';
import classes from './NewTodo.module.css';
//import { TodosContext } from '../../context/TodoContext';
// import Button from '../../shared/Button';
// import Text from '../../shared/Text';
import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addTodo } from '../../store/todoSlice';

//const NewTodo: React.FC<{ onAddTodo: (newTodo: Todo) => void }> = (props) => {
const NewTodo: React.FC = () => {
  const [isValid, setIsValid] = useState(true);
  //const todoContext = useContext(TodosContext);

  const dispatch = useAppDispatch();

  const submitHander = (event: React.FormEvent) => {
    event.preventDefault();
    // const todoId = idRef.current!.value;
    const todoValue = nameRef.current!.value;

    if (todoValue.trim().length === 0) {
      setIsValid(() => {
        return false;
      });
      return;
    }
    const newTodo = new Todo(todoValue);
    // todoContext.onAddNewTodo(newTodo);
    // dispatch action with payload
    dispatch(addTodo(newTodo));

    setIsValid(() => {
      return true;
    });
  };

  // const idRef = React.createRef<HTMLInputElement>();
  const nameRef = React.createRef<HTMLInputElement>();

  return (
    <form className={classes.form} onSubmit={submitHander}>
      {/* <label>Id</label>
      <input type='text' ref={idRef}></input> */}
      <label>Todo text</label>
      <input type='text' ref={nameRef}></input>
      <button onClick={submitHander}>Add</button>
    </form>
  );
};

export default NewTodo;
