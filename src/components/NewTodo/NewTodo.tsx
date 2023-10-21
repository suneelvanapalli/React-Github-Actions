import { useRef, useContext } from 'react';
import { Todo } from '../../models/todo';
import classes from './NewTodo.module.css';
import { TodosContext } from '../../context/TodoContext';
import Button from '../../shared/Button';
import Text from '../../shared/Text';

//const NewTodo: React.FC<{ onAddTodo: (newTodo: Todo) => void }> = (props) => {
const NewTodo: React.FC = () => {
  const todoContext = useContext(TodosContext);
  const submitHander = (event: React.FormEvent) => {
    event.preventDefault();
    const todoId = idRef.current!.value;
    const todoValue = nameRef.current!.value;

    const newTodo = new Todo(todoId, todoValue);
    todoContext.onAddNewTodo(newTodo);
  };

  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

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
