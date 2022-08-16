import React from "react";
import Student from "./Student";

class ComponentWillUnmount extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }
  render() {
    return (
      <div>
        <h1>Compnent Will Un-mount</h1>
        {this.state.show ? <Student /> : <p>Student component removed!</p>}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
      </div>
    );
  }
}
export default ComponentWillUnmount;
