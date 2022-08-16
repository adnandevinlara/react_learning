import React from "react";
ChildComponentTwo = (props) => {
  const data = { name: "adnan", age: "19" };
  return (
    <div>
      <h3>Lifting Up.</h3>
      {/* <button onClick={() => alert(data)}>Click Me</button> */}
      <button onClick={() => props.alert(data)}>Click Me</button>
    </div>
  );
};

export default ChildComponentTwo;
