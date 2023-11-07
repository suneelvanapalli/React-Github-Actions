import React from 'react';
import { decrement, increment } from '../store/todoslice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

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
    <main>
      <div>{count}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
