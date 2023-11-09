import React from 'react';
import classes from './TodoItem.module.css';
import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material';
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
      {/* <li className={classes.item}>{props.name}</li> */}
      <ListItem>
        <ListItemButton component='a' href='#simple-list'>
          <ListItemText>{props.name}</ListItemText>
        </ListItemButton>
        <Button className={classes.button} onClick={props.onRemoveClick}>
          Remove
        </Button>
      </ListItem>
    </React.Fragment>
  );
};

export default TodoItem;
