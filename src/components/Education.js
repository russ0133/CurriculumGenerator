import "../App.css";
import React, { useState } from "react";
import Button from "./ui/Button";
import { FaUniversity } from "react-icons/fa";
import EducationList from "./EducationList";

const inputCSS =
  "bg-gray-50  mb-1 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

export function Education(props) {
  // test
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  if (show)
    return (
      <div className="Border mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1 shadow-sm rounded-lg w-screen md:w-1/2">
        <div className="Wrapper bg-stone-100 shadow-md p-5">
          <EducationList
            educations={props.educations}
            deleteEducation={props.deleteEducation}
          />
          <h1 className="flex flex-row text-4xl mb-5 ">
            Educational Record
            <FaUniversity className="ml-auto opacity-75" />
          </h1>
          <form className="flex flex-col " onSubmit={props.addEducation}>
            <input
              type="text"
              id="schoolName"
              className={inputCSS}
              placeholder="school name"
              onChange={props.handleInputChange}
              value={props.schoolName}
              context="education"
              required
            />
            <input
              type="text"
              id="schoolTitle"
              className={inputCSS}
              placeholder="title of study"
              value={props.schoolTitle}
              onChange={props.handleInputChange}
              context="education"
              required
            />
            <input
              type="date"
              id="schoolDate"
              className={inputCSS}
              placeholder="date of study"
              value={props.schoolDate}
              onChange={props.handleInputChange}
              context="education"
              required
            />
            <div className="flex flex-row justify-between">
              <Button
                title="Remove Education"
                onClick={toggleShow}
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
  else
    return (
      <div className="BORDER mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1 shadow-sm rounded-lg w-screen md:w-1/2">
        <div className="WRAPPER bg-stone-100 shadow-md p-5">
          <h1 className="TITLE flex flex-row text-4xl  ">
            Educational Record
            <FaUniversity className="ml-auto opacity-75" />
          </h1>
          <Button title="Add Education" onClick={toggleShow} />
        </div>
      </div>
    );
}

export default Education;
