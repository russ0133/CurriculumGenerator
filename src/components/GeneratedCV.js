import React, { Component } from "react";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";

function GeneratedCV(props) {
  return (
    <div className="bg-stone-300 my-12 px-12 shadow-md rounded-2xl">
      <div className="flex flex-row text-lg w-full items-center justify-center gap-6 mt-12">
        <div className="left mx-12">
          <img
            className="h-48 rounded-full border-4 border-indigo-400"
            src={require("../img/pfp.jpg")}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold underline text-indigo-500">
            Gabriel {props.fullName}
          </h1>
          <div className="flex flex-row gap-x-32 text-sm font-roblitalic">
            <div>Email: {props.email}</div>
            <div>Phone: {props.phone}</div>
          </div>
        </div>
      </div>
      <ExperienceList jobs={props.jobs} deleteJob="" type="generated" />
      <EducationList
        educations={props.educations}
        deleteJob=""
        type="generated"
      />
      <div>School Name: {props.schoolName}</div>
      <div>Education Title: {props.schoolTitle}</div>
      <div>Education Date: {props.schoolDate}</div>
    </div>
  );
}

export default GeneratedCV;
