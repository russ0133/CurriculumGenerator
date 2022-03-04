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
        <div>School Name: {this.props.schoolName}</div>
        <div>Education Title: {this.props.schoolTitle}</div>
        <div>Education Date: {this.props.schoolDate}</div>
      </div>
    );
  }
}

export default GeneratedCV;
