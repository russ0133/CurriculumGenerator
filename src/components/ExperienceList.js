import React from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import { MdRemoveCircle } from "react-icons/md";
import { IconContext } from "react-icons";

const ExperienceList = (props) => {
  const { jobs, deleteJob } = props;

  const divStyle = { marginLeft: 15 };
  if (jobs.length > 0) {
    return (
      <ul className="w-full rounded-sm border-b-2 mb-4 border-stone-400 font-roblitalic ">
        {jobs.map((job, index) => {
          return (
            <li className="flex flex-row" key={job.id}>
              <IconContext.Provider
                value={{ color: "darkred", className: "global-class-name" }}
              >
                {" "}
                <MdRemoveCircle
                  onClick={() => {
                    deleteJob(job.id);
                  }}
                  className="relative top-0.5 mr-2 cursor-pointer transition ease-in-out delay-50 hover:scale-150"
                />
              </IconContext.Provider>
              Experience Added: {job.positionTitle} at {job.companyName}
            </li>
          );
        })}
      </ul>
    );
  } else return null;
};

export default ExperienceList;
