import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.type == "secondary")
      return (
        <a
          onClick={this.props.onClick}
          className="flex flex-col items-center justify-center self-center border-2  text-stone-500 border-purple-500 cursor-pointer rounded-lg text-sm w-max mt-5 px-5  py-1 font-robmedium"
        >
          {this.props.title}
        </a>
      );
    else
      return (
        <a
          onClick={this.props.onClick}
          className="flex flex-col items-center justify-center self-center  bg-purple-500 text-stone-100 cursor-pointer rounded-lg w-max mt-5 px-5 py-1 text-sm font-robmedium"
        >
          {this.props.title}
        </a>
      );
  }
}

export default Button;
