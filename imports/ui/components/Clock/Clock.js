import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <h2>
        Current Time: {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </h2>
    );
  }
}
export default Clock;
