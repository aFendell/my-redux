import { useState, useEffect } from 'react';
import './App.css';
import { store } from './redux/store';

function App() {
  const { getState, subscribe, dispatch } = store;
  const [count, setCount] = useState(getState().count);

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setCount(getState().count);
    });

    return () => {
      unsubscribe();
    };
  }, [getState, subscribe]);

  const onIncrement = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const onDecrement = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  const onReset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return (
    <>
      <h1>Redux Counter</h1>
      <div className='card'>
        <h2
          style={{
            fontSize: '1.5rem',
          }}
        >
          Count: {count}
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '8px',
          }}
        >
          <button onClick={onIncrement}>Add +</button>
          <button onClick={onDecrement}>Reduce -</button>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
