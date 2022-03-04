import "../App.css";
import React, { Component } from "react";
import Button from "./ui/Button";
import { FaBriefcase } from "react-icons/fa";

const inputCSS =
  "bg-gray-50  mb-1 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

export class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  toggleShow = () => {
    console.log(this);
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
    console.log("! Toggled Experience.");
  };

  render() {
    const { show } = this.state;
    if (show) {
      return (
        <div className="mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1 shadow-sm rounded-lg w-screen md:w-1/2">
          <div className="bg-stone-100 border border-t-2 border-slate-300 shadow-md p-5">
            <h1 className="flex flex-row text-4xl mb-5 ">
              Job Experience
              <FaBriefcase className="ml-auto opacity-75" />
            </h1>
            <form className="flex flex-col ">
              <input
                type="text"
                id="name"
                className={inputCSS}
                placeholder="company name"
              />
              <input
                type="email"
                id="email"
                className={inputCSS}
                placeholder="position title"
              />
              <input
                type="number"
                id="email"
                className={inputCSS}
                placeholder="main tasks"
              />
              <input
                type="number"
                id="email"
                className={inputCSS}
                placeholder="start date"
              />
              <input
                type="number"
                id="email"
                className={inputCSS}
                placeholder="end date"
              />
              <Button title="Remove Education" onClick={this.toggleShow} />
            </form>
          </div>
        </div>
      );
    } else
      return (
        <div className="mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1 shadow-sm rounded-lg w-screen md:w-1/2">
          <div className="bg-stone-100  p-5">
            <h1 className="flex flex-row text-4xl mb-5 ">
              Job Experience
              <FaBriefcase className="ml-auto opacity-75" />
            </h1>
            <Button title="Add Education" onClick={this.toggleShow} />
          </div>
        </div>
      );
  }
}

export default Experience;
