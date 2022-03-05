import React from "react";
import { BsFillBackspaceFill } from "react-icons/bs";

const EducationList = (props) => {
  const { educations, deleteEducation } = props;

  const divStyle = { marginLeft: 15 };
  if (educations.length > 0) {
    return (
      <ul className="w-full rounded-sm border-b-2 mb-4 border-stone-400 font-custom2 text-sm">
        {educations.map((education, index) => {
          return (
            <li
              key={education.id}
              onClick={() => {
                deleteEducation(education.id);
              }}
            >
              Studied {education.schoolTitle} at {education.schoolName}
            </li>
          );
        })}
      </ul>
    );
  } else return null;
};

export default EducationList;
