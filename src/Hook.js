import React, { useState } from "react";
// use State is a hook
function Hook() {
  const [data, setData] = useState("Adnan");
  return (
    <div>
      <h1>Simple Hook Example</h1>
      <p>State: {data}</p>
      <button onClick={() => setData("Zaib")}>Update data</button>
    </div>
  );
}

export default Hook;
