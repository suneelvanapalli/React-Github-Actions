import React from 'react';
import classes from './TodoItem.module.css';
// import { TodosContext } from '../../context/TodoContext';
// import Button from '../../shared/Button';

interface Props {
  name: string;
  onRemoveClick: (event: React.MouseEvent) => void;
}

const TodoItem: React.FC<Props> = (props) => {
  // const todoContext = React.useContext(TodosContext);
  return (
    <React.Fragment>
      <li className={classes.item}>{props.name}</li>
      <button className={classes.button} onClick={props.onRemoveClick}>
        Remove
      </button>
    </React.Fragment>
  );
};

export default TodoItem;
