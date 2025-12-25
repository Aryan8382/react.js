import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>useState counter</h2>
      <p>Count: {count}</p>
      <button onClick={inc}>click</button>
    </div>
  );
}

