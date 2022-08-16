import React from "react";
class RenderLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "adnan@gmail.com"
    };
  }
  render() {
    return (
      <div>
        <h1>Render Life Cycle in React Js</h1>
        {/* <p>Name: {this.props.name}</p> */}
        <p>Email : {this.state.email}</p>
        <button onClick={() => this.setState({ email: "zaib@gmail.com" })}>
          Update state
        </button>
      </div>
    );
  }
}

export default RenderLifeCycle;
