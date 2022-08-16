import React, { useState } from "react";
function HOC() {
  return (
    <div>
      <h1>HOC</h1>
      {/* <Counter />
      <Counter /> */}
      <RedHOComponent cmp={Counter} />
      <GreenHOComponent cmp={Counter} />
    </div>
  );
}
function RedHOComponent(props) {
  return (
    <div>
      <h2 style={{ color: "red" }}>
        <props.cmp />
      </h2>
    </div>
  );
}
function GreenHOComponent(props) {
  return (
    <div>
      <h2 style={{ color: "green" }}>
        <props.cmp />
      </h2>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default HOC;
