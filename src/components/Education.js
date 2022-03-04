import "../App.css";
import React, { Component } from "react";
import Button from "./ui/Button";

const inputCSS =
  "bg-gray-50  mb-1 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

export class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.active == "true") {
      return (
        <div className="bg-indigo-400 shadow-md p-5 h-full w-full ">
          <h1 className="text-4xl mb-5">Educational Record</h1>
          <form className="flex flex-col ">
            <input
              type="text"
              id="name"
              className={inputCSS}
              placeholder="school name"
            />
            <input
              type="email"
              id="email"
              className={inputCSS}
              placeholder="title of study"
            />
            <input
              type="number"
              id="email"
              className={inputCSS}
              placeholder="date of study"
            />
            <Button title="Remove Education" onClick={this.props.handleClick} />
          </form>
        </div>
      );
    } else
      return (
        <div className="bg-indigo-400 shadow-md p-5 h-full w-full ">
          <h1 className="text-4xl ">Educational Record</h1>
          <Button title="Add Education" onClick={this.props.handleClick} />
        </div>
      );
  }
}

export default Education;
