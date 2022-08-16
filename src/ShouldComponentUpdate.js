import React, { useState } from "react";
class ShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  shouldComponentUpdate() {
    console.warn("ShuoldComponentUpdate");
    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }
    /** we are return true bcz this method by default stop to update
     * props and State **/
  }

  render() {
    return (
      <div>
        <h1>Should Component Update</h1>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default ShouldComponentUpdate;
