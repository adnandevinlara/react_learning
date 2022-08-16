import React from "react";

class Student extends React.Component {
  componentWillUnmount() {
    alert("Component Will unMount");
  }
  render() {
    return (
      <div>
        <p>Student for Compnent Will Un-mount</p>
      </div>
    );
  }
}
export default Student;
