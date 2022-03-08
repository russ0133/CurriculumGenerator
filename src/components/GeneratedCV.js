import React, { Component } from "react";

export class GeneratedCV extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
              Gabriel {this.props.fullName}
            </h1>
            <div className="flex flex-row gap-x-32 text-sm font-roblitalic">
              <div>Email: {this.props.email}</div>
              <div>Phone: {this.props.phone}</div>
            </div>
          </div>
        </div>

        <div>School Name: {this.props.schoolName}</div>
        <div>Education Title: {this.props.schoolTitle}</div>
        <div>Education Date: {this.props.schoolDate}</div>
      </div>
    );
  }
}

export default GeneratedCV;
