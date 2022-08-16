import React, { useState } from "react";
function StateObject() {
  // const [name, setName] = useState("adnan");
  // const [age, setAge] = useState(27);
  // this is object
  const [data, setData] = useState({ name: "zaib", age: 45 });

  return (
    <div>
      <h2>State Object with hooks</h2>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ name: e.target.value })}
        placeholder="Enter name..."
      />
      <input
        type="number"
        value={data.age}
        onChange={(e) => setData({ age: e.target.value })}
        placeholder="Enter age..."
      />

      {/* <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ age: data.age, name: e.target.value })}
        placeholder="Enter name..."
      />
      <input
        type="number"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
        placeholder="Enter age..."
      /> */}

      <p>Name:{data.name}</p>
      <p>Age:{data.age}</p>
    </div>
  );
}
export default StateObject;
