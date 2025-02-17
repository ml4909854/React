import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './slice/slice';

const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default App;
