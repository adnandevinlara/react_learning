import React, { useState } from "react";
class ComponentDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "adnan",
      count: 0
    };
    // console.warn("constructor");
    // Binding this keyword
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidUpdate(preProps, preState, snamshot) {
    console.warn("componentDidUpdate", preState);
    if (preState.count == this.state.count) {
      alert("same");
    }
  }
  handleClick() {
    // Changing state
    // this.setState = { name: "Welcome to the React world!" };
    this.setState({ name: "Welcome to the React world!" });
  }
  render() {
    // console.warn("render");
    return (
      <div>
        <h1>Component Did Update</h1>
        <p>Name: {this.state.name}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>click me</button>
        <button
          onClick={() => {
            this.setState({ name: "zaib" });
          }}
        >
          click me
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update count
        </button>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Update count with 1
        </button>
      </div>
    );
  }
}

export default ComponentDidUpdate;
