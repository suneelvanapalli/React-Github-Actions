import React from 'react';
import { decrement, increment } from '../store/counterSlice';
import { useAppSelector, useAppDispatch } from '../store';
import { Box, Button } from '@mui/material';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <Box>
      <div>{count}</div>
      <Button onClick={incrementHandler}>Increment</Button>
      <Button onClick={decrementHandler}>Decrement</Button>
    </Box>
  );
};

export default Counter;
