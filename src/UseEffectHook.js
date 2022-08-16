import React, { useState, useEffect } from "react";
// use State is a hook
function UseEffectHook() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.warn({ counter });
  });
  useEffect(() => {
    console.warn({ counter });
  });
  return (
    <div>
      <h1>Simple useEffect Hook Example 2</h1>
      <p>State: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Update counter</button>
    </div>
  );
}

export default UseEffectHook;
