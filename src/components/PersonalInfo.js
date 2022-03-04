import "../App.css";
import React, { Component } from "react";
import { FaInfoCircle } from "react-icons/fa";

const inputCSS =
  "bg-gray-50  mb-1 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1 shadow-sm2 rounded-lg w-screen md:w-1/2">
        <div className="rounded-sm p-5 bg-stone-100">
          <h1 className="text-4xl mb-5 flex flex-row">
            Personal Information <FaInfoCircle className="ml-auto opacity-75" />
          </h1>
          <form className="flex flex-col ">
            <input
              type="text"
              id="fullName"
              className={inputCSS}
              placeholder="full name"
              value={this.props.fullName}
              onChange={this.props.handleInputChange}
            />
            <input
              type="email"
              id="email"
              className={inputCSS}
              placeholder="email"
              value={this.props.email}
              onChange={this.props.handleInputChange}
            />
            <input
              type="number"
              id="email"
              className={inputCSS}
              placeholder="phone number"
              value={this.props.phone}
              onChange={this.props.handleInputChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
