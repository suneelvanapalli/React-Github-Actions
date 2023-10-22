import { useRef, useContext, useState } from 'react';
import { Todo } from '../../models/todo';
import classes from './NewTodo.module.css';
import { TodosContext } from '../../context/TodoContext';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
import React from 'react';

//const NewTodo: React.FC<{ onAddTodo: (newTodo: Todo) => void }> = (props) => {
const NewTodo: React.FC = () => {
  const [isValid, setIsValid] = useState(true);
  const todoContext = useContext(TodosContext);
  const submitHander = (event: React.FormEvent) => {
    event.preventDefault();
    const todoId = idRef.current!.value;
    const todoValue = nameRef.current!.value;

    if (todoId.trim().length === 0 && todoValue.trim().length === 0) {
      setIsValid(() => {
        return false;
      });
      return;
    }
    const newTodo = new Todo(todoId, todoValue);
    todoContext.onAddNewTodo(newTodo);
    setIsValid(() => {
      return true;
    });
  };

  const idRef = React.createRef<HTMLInputElement>();
  const nameRef = React.createRef<HTMLInputElement>();

  return (
    <form className={classes.form} onSubmit={submitHander}>
      <label>Id</label>
      <Text ref={idRef}></Text>
      <label>Todo text</label>
      <Text ref={nameRef}></Text>
      <Button>Add</Button>
    </form>
  );
};

export default NewTodo;
