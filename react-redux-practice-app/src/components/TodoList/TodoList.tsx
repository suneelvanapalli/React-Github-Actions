import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css';
import { TodosContext } from '../../context/TodoContext';

// interface Props {
//   // items: Todo[];
//   //onRemoveClick: (id: string) => void;
// }

const TodoList: React.FC = () => {
  const todoContext = React.useContext(TodosContext);
  return (
    <React.Fragment>
      <ul className={classes.todos}>
        {todoContext.todoItems.map((m) => {
          return (
            <TodoItem
              key={m.id}
              id={m.id}
              name={m.name}
              // onRemoveClick={props.onRemoveClick}
            ></TodoItem>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
