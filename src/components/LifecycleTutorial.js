import React, { Component } from "react";

class LifecycleTutorial extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("-----------------");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("-----------------");
  }
  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <br />
        Counter: {this.state.counter}
      </div>
    );
  }
}

export default LifecycleTutorial;
