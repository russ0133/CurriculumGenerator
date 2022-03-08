import "../App.css";
import React, { Component } from "react";
import Button from "./ui/Button";
import { FaUniversity } from "react-icons/fa";
import EducationList from "./EducationList";

const inputCSS =
  "bg-gray-50  mb-1 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

export class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
    console.log("! d showEducation.");
  };

  render() {
    const { show } = this.state;
    if (show) {
      return (
        <div className="mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1 shadow-sm rounded-lg w-screen md:w-1/2">
          <div className="bg-stone-100 shadow-md p-5">
            <EducationList
              educations={this.props.educations}
              deleteEducation={this.props.deleteEducation}
            />

            <h1 className="flex flex-row text-4xl mb-5 ">
              Educational Record
              <FaUniversity className="ml-auto opacity-75" />
            </h1>
            <form className="flex flex-col " onSubmit={this.props.addEducation}>
              <input
                type="text"
                id="schoolName"
                className={inputCSS}
                placeholder="school name"
                onChange={this.props.handleInputChange}
                value={this.props.schoolName}
                context="education"
              />
              <input
                type="email"
                id="schoolTitle"
                className={inputCSS}
                placeholder="title of study"
                value={this.props.schoolTitle}
                onChange={this.props.handleInputChange}
                context="education"
              />
              <input
                type="number"
                id="schoolDate"
                className={inputCSS}
                placeholder="date of study"
                value={this.props.schoolDate}
                onChange={this.props.handleInputChange}
                context="education"
              />
              <div className="flex flex-row justify-between">
                <Button
                  title="Remove Education"
                  onClick={this.toggleShow}
                  type="secondary"
                />
                <button
                  type="submit"
                  className="flex flex-col items-center justify-center self-center  bg-purple-500 text-stone-100 cursor-pointer rounded-lg w-max mt-5 px-5 py-1 text-sm font-robmedium"
                >
                  Add Education
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else
      return (
        <div className="mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1 shadow-sm rounded-lg w-screen md:w-1/2">
          <div className="bg-stone-100 shadow-md p-5">
            <h1 className="flex flex-row text-4xl  ">
              Educational Record
              <FaUniversity className="ml-auto opacity-75" />
            </h1>
            <Button title="Add Education" onClick={this.toggleShow} />
          </div>
        </div>
      );
  }
}

export default Education;
