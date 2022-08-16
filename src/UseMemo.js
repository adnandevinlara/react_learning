import React, { useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(3);

  function updateCount() {
    return count + 1;
  }
  return (
    <div>
      <h1>UseMemo in React</h1>
      <p>Count: {count}</p>
      <p>Item: {item}</p>
      <p>{updateCount()}</p>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
    </div>
  );
}
export default UseMemo;
