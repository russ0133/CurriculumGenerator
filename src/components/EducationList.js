import React from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import { MdRemoveCircle } from "react-icons/md";
import { IconContext } from "react-icons";

const EducationList = (props) => {
  const { educations, deleteEducation, type } = props;

  const divStyle = { marginLeft: 15 };
  if (educations.length > 0) {
    if (type == "generated") {
      return (
        <div>
          <h1 className="Section font-custom2 mt-6 border-b-2 border-stone-400 text-2xl">
            EDUCATION
          </h1>
          <ul className="ArrayMap w-full mb-4 font-roblitalic ">
            {educations.map((education, index) => {
              return (
                <div className="mx-4 mt-2">
                  <div className="SchoolTitle text-xl font-robmedium">
                    {education.schoolTitle}
                  </div>
                  <p className="SchoolName mx-2 text-sm">
                    at {education.schoolName}
                  </p>
                  <p className="Date mx-2 text-sm">
                    - graduated in {education.schoolDate}
                  </p>
                </div>
              );
            })}
          </ul>
        </div>
      );
    } else
      return (
        <ul className="w-full rounded-sm border-b-2 mb-4 border-stone-400 font-roblitalic ">
          {educations.map((education, index) => {
            return (
              <li className="flex flex-row" key={education.id}>
                <IconContext.Provider
                  value={{ color: "darkred", className: "global-class-name" }}
                >
                  {" "}
                  <MdRemoveCircle
                    onClick={() => {
                      deleteEducation(education.id);
                    }}
                    className="relative top-0.5 mr-2 cursor-pointer transition ease-in-out delay-50 hover:scale-150"
                  />
                </IconContext.Provider>
                Education Added: {education.schoolTitle} at{" "}
                {education.schoolName}{" "}
              </li>
            );
          })}
        </ul>
      );
  } else return null;
};

export default EducationList;
