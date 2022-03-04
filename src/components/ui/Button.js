import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a
        onClick={this.props.onClick}
        className="flex flex-col items-center justify-center self-center  bg-purple-500 text-stone-100 cursor-pointer rounded-lg w-max mt-5 px-5 py-1"
      >
        {this.props.title}
      </a>
    );
  }
}

export default Button;
