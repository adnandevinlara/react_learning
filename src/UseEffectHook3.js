import React, { useState, useEffect } from "react";
import PropsInHook from "./PropsInHook";
// use State is a hook
function UseEffectHook3() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.warn("data");
  }, [data]);
  useEffect(() => {
    console.warn("counter");
  }, [counter]);

  return (
    <div>
      <h1>Simple useEffect Hook Example 2</h1>
      <p>Count: {counter}</p>
      <p>Data: {data}</p>
      <PropsInHook count={counter} data={data} />
      <button onClick={() => setCounter(counter + 1)}>Update counter</button>
      <button onClick={() => setData(data + 1)}>Update data</button>
      <button onClick={() => update()}>Send props</button>
    </div>
  );

  function update() {
    setCounter(counter + 1);
    setData(data + 1);
  }
}

export default UseEffectHook3;
