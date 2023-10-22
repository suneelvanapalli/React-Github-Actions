import React from 'react';
import classes from './TodoItem.module.css';
import { TodosContext } from '../../context/TodoContext';
import Button from '../../shared/Button';

interface Props {
  id: string;
  name: string;
  // onRemoveClick: (id: string) => void;
}

const TodoItem: React.FC<Props> = (props) => {
  const todoContext = React.useContext(TodosContext);
  return (
    <React.Fragment>
      <li className={classes.item}>{props.name}</li>
      <Button
        className={classes.button}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          todoContext.onRemoveClick(props.id);
        }}
      >
        Remove
      </Button>
    </React.Fragment>
  );
};

export default TodoItem;
