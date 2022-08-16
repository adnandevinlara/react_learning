import React, { useState } from "react";
class ComponentDidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "adnan"
    };
    // Binding  this keyword
    this.handleClick = this.handleClick.bind(this);
  }
  compoentDidMount() {
    console.warn("componentDidMount");
  }
  handleClick() {
    // Changing state
    // this.setState = { name: "Welcome to the React world!" };
    this.setState({ name: "Welcome to the React world!" });
  }
  render() {
    return (
      <div>
        <h1>Component Did Mount</h1>
        <p>Name: {this.state.name}</p>
        <button onClick={this.handleClick}>click me</button>
        <button
          onClick={() => {
            this.setState({ name: "zaib" });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default ComponentDidMount;
