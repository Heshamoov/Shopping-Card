import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["Car", "Phone", "House"],
  };
  style = {
    fontSize: 30,
  };
  render() {
    return (
      <React.Fragment>
        <h1 style={this.style} className={this.countClasses()}>
          {this.checkCount()}
        </h1>

        <button style={{ fontSize: 30 }} className="btn btn-sm">
          Add
        </button>

        <p>List</p>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  countClasses() {
    let countClasses = "badge m-2 badge-";
    countClasses += this.state.count === 0 ? "warning" : "primary";
    return countClasses;
  }

  checkCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
