import React from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import { MdRemoveCircle } from "react-icons/md";

const EducationList = (props) => {
  const { educations, deleteEducation } = props;

  const divStyle = { marginLeft: 15 };
  if (educations.length > 0) {
    return (
      <ul className="w-full rounded-sm border-b-2 mb-4 border-stone-400 font-custom2 ">
        {educations.map((education, index) => {
          return (
            <li
              className="flex flex-row"
              key={education.id}
              onClick={() => {
                deleteEducation(education.id);
              }}
            >
              <MdRemoveCircle className="relative top-0.5 mr-2 cursor-pointer transition ease-in-out delay-150 hover:scale-150" />
              Studied {education.schoolTitle} at {education.schoolName}{" "}
            </li>
          );
        })}
      </ul>
    );
  } else return null;
};

export default EducationList;
