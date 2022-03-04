import "../App.css";
import React, { Component } from "react";

const inputCSS =
  "bg-gray-50  mb-1 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bg-indigo-500 shadow-md rounded-t-lg p-5 w-screen md:w-1/2">
        <h1 className="text-4xl mb-5">Personal Information</h1>
        <form className="flex flex-col ">
          <input
            type="text"
            id="fullName"
            className={inputCSS}
            placeholder="full names"
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
            id="phone"
            className={inputCSS}
            placeholder="phone number"
            value={this.props.phone}
            onChange={this.props.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
