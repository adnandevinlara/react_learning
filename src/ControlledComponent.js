import React, { useState } from "react";

function ControlledComponent() {
  const [val, setVal] = useState(1);
  return (
    <div>
      <h1>Controlled Component</h1>
      <input
        type="text"
        // value="{val}"
        // defaultValue="adnan"
        onChange={(e) => setVal(e.target.value)}
      />
      <p>Value: {val}</p>
    </div>
  );
}
export default ControlledComponent;
