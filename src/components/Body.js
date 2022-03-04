import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import GeneratedCV from "./GeneratedCV";

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEducation: false,
      showExperience: false,

      fullName: "",
      email: "",
      phone: "",
    };
  }

  toggleEducation = () => {
    if (this.state.showEducation == false)
      this.setState({ showEducation: true });
    else this.setState({ showEducation: false });
    console.log("test");
  };

  toggleExperience = () => {
    if (this.state.showExperience == false)
      this.setState({ showExperience: true });
    else this.setState({ showExperience: false });
    console.log("test");
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;

    this.setState({ [name]: value });
  };

  render() {
    const { showEducation, showExperience, email, fullName, phone } =
      this.state;
    return (
      <div className="flex flex-col justify-start items-center mt-6 bg-gradient-to-r from-stone-50 via-stone-200 to-stone-50">
        <PersonalInfo
          handleInputChange={this.handleInputChange}
          fullName={fullName}
          email={email}
          phone={phone}
        />

        <div className="w-screen md:w-1/2">
          {showEducation ? (
            <Education active="true" handleClick={this.toggleEducation} />
          ) : null}
          {!showEducation ? (
            <Education active="false" handleClick={this.toggleEducation} />
          ) : null}
        </div>

        <div className="w-screen md:w-1/2">
          {showExperience ? (
            <Experience active="true" handleClick={this.toggleExperience} />
          ) : null}
          {!showExperience ? (
            <Experience active="false" handleClick={this.toggleExperience} />
          ) : null}
        </div>

        <div className="h-max mt-12 w-full bg-stone-600 text-center align-center text-2xl shadow-lg">
          Your Generated CV
        </div>
        <GeneratedCV name={fullName} email={email} phone={phone} />
      </div>
    );
  }
}
