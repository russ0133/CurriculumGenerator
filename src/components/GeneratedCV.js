import React, { Component } from "react";

export class GeneratedCV extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex flex-col bg-stone-500 text-lg w-full text-left">
        <div>Picture</div>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
        <div>Phone: {this.props.phone}</div>
      </div>
    );
  }
}

export default GeneratedCV;
