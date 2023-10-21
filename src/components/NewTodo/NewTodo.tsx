import { useRef } from 'react';
import { Todo } from '../../models/todo';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (newTodo: Todo) => void }> = (props) => {
  const submitHander = (event: React.FormEvent) => {
    event.preventDefault();
    const todoId = idRef.current!.value;
    const todoValue = nameRef.current!.value;

    const newTodo = new Todo(todoId, todoValue);
    props.onAddTodo(newTodo);
  };

  const idRef = useRef<HTMLInputElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <form className={classes.form} onSubmit={submitHander}>
      <label>Id</label>
      <input type='text' ref={idRef} />
      <label>Todo text</label>
      <input type='text' ref={nameRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
