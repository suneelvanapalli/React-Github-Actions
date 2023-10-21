import React from 'react';
import classes from './TodoItem.module.css';

interface Props {
  id: string;
  name: string;
  onRemoveClick: (id: string) => void;
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <li className={classes.item}>{props.name}</li>
      <button className={classes.button}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          props.onRemoveClick(props.id);
        }}
      >
        Remove
      </button>
    </React.Fragment>
  );
};

export default TodoItem;
