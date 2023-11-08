import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css';
//import { TodosContext } from '../../context/TodoContext';
import { removeTodo } from '../../store/todoSlice';
import { useAppSelector, useAppDispatch } from '../../store';



const TodoList: React.FC = () => {
  // const todoContext = React.useContext(TodosContext);
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch()


  return (
    <React.Fragment>
      <ul className={classes.todos}>
        {todos.map((m) => {
          return (
            <TodoItem
              key={m.id}
              name={m.name}
              onRemoveClick={(event: React.MouseEvent) => {
                event.preventDefault();
                // todoContext.onRemoveClick(m.id!);
                dispatch(removeTodo(m.id!))
              }}
            ></TodoItem>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
