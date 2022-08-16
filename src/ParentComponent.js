import React from "react";
import ChildComponent from "./ChildComponentTwo";
ParentComponent = (props) => {
  function abc(data) {
    console.log(data);
    alert(data.name + " : " + data.age);
  }
  return (
    <div>
      <h1>Parent Component.</h1>
      <ChildComponent alert={abc} />
    </div>
  );
};

export default ParentComponent;
