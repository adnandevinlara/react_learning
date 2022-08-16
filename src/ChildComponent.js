import React from "react";
ChildComponent = (props) => {
  return (
    <div>
      <h3>Child Components</h3>
      <p>{props.name}</p>
    </div>
  );
};

export default ChildComponent;
