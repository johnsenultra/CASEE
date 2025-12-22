import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p data-testid="count-display">Count: {count}</p>
      <button 
        data-testid="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button 
        data-testid="decrement-button"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button 
        data-testid="reset-button"
        onClick={() => setCount(initialCount)}
      >
        Reset
      </button>
    </div>
  );
};