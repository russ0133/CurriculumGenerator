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

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("shouldComponentUpdate -- DO NOT RENDER");
      return false;
    }
    console.log("shouldComponentUpdate -- RENDER");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("-----------------");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("-----------------");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }
}

export default LifecycleTutorial;
