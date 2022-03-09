import React from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import { MdRemoveCircle } from "react-icons/md";
import { IconContext } from "react-icons";

const ExperienceList = (props) => {
  const { jobs, deleteJob, type } = props;

  const divStyle = { marginLeft: 15 };
  if (jobs.length > 0) {
    if (type == "generated") {
      return (
        <div>
          <h1 className="Section font-custom2 mt-6 border-b-2 border-stone-400 text-2xl">
            JOB EXPERIENCE
          </h1>
          <ul className="ArrayMap w-full mb-4 font-roblitalic ">
            {jobs.map((job, index) => {
              return (
                <div className="mx-4 mt-2">
                  <div className="PositionTitle text-xl font-robmedium">
                    {job.positionTitle}
                  </div>
                  <p className="CompanyName mx-2 text-sm">
                    at Company {job.companyName}
                  </p>
                  <p className="JobTasks mx-2 font-robmedium text-sm">
                    - {job.mainTasks}
                  </p>
                  <p className="Date mx-2 text-sm">
                    from {job.startDate} to {job.endDate}
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
