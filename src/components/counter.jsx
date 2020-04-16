import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.checkCount()}</h1>
        <button>Add</button>
      </React.Fragment>
    );
  }

  checkCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
