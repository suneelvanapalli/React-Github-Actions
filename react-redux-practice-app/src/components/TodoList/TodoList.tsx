import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css';
import { TodosContext } from '../../context/TodoContext';



const TodoList: React.FC = () => {
  const todoContext = React.useContext(TodosContext);
  return (
    <React.Fragment>
      <ul className={classes.todos}>
        {todoContext.todoItems.map((m) => {
          return (
            <TodoItem
              key={m.id}
              name={m.name}
              onRemoveClick={(event: React.MouseEvent) => {
                event.preventDefault();
                todoContext.onRemoveClick(m.id!);
              }}
            ></TodoItem>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
