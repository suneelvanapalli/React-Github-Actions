import React from 'react';
import { Todo } from '../../models/todo';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css';

interface Props {
  items: Todo[];
  onRemoveClick: (id: string) => void;
}

const TodoList: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <ul className={classes.todos}>
        {props.items.map((m) => {
          return (
            <TodoItem
              key={m.id}
              id={m.id}
              name={m.name}
              onRemoveClick={props.onRemoveClick}
            ></TodoItem>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
