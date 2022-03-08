import "../App.css";
import React, { Component } from "react";
import Button from "./ui/Button";
import { FaBriefcase } from "react-icons/fa";
import ExperienceList from "./ExperienceList.js";

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
            <ExperienceList
              jobs={this.props.jobs}
              deleteJob={this.props.deleteJob}
            />
            <form className="flex flex-col " onSubmit={this.props.addJob}>
              <input
                type="text"
                id="companyName"
                className={inputCSS}
                onChange={this.props.handleInputChange}
                value={this.props.companyName}
                placeholder="company name"
                context="job"
              />
              <input
                type="email"
                id="positionTitle"
                className={inputCSS}
                onChange={this.props.handleInputChange}
                value={this.props.positionTitle}
                placeholder="position title"
                context="job"
              />
              <input
                type="number"
                id="mainTasks"
                onChange={this.props.handleInputChange}
                value={this.props.mainTasks}
                className={inputCSS}
                placeholder="main tasks"
                context="job"
              />
              <input
                type="number"
                id="startDate"
                value={this.props.startDate}
                onChange={this.props.handleInputChange}
                className={inputCSS}
                placeholder="start date"
                context="job"
              />
              <input
                type="number"
                id="endDate"
                value={this.props.endDate}
                onChange={this.props.handleInputChange}
                className={inputCSS}
                placeholder="end date"
                context="job"
              />
              <div className="flex flex-row justify-between">
                <Button
                  title="Remove Experience"
                  onClick={this.toggleShow}
                  type="secondary"
                />
                <button
                  type="submit"
                  className="flex flex-col items-center justify-center self-center  bg-purple-500 text-stone-100 cursor-pointer rounded-lg w-max mt-5 px-5 py-1 text-sm font-robmedium"
                >
                  Add Experience
                </button>
              </div>
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
            <Button title="Add Experience" onClick={this.toggleShow} />
          </div>
        </div>
      );
  }
}

export default Experience;
