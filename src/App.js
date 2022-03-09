import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";

// Components
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneratedCV from "./components/GeneratedCV";
import LifecycleTutorial from "./components/LifecycleTutorial";

// TODO: Implement proper education list.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      personalInfo: {
        fullName: "",
        email: "",
        phone: "",
      },

      education: {
        schoolName: "",
        schoolTitle: "",
        schoolDate: "",
        id: uniqid(),
      },
      educations: [],

      job: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
      jobs: [],
    };
  }

  mountCounter = () => this.setState({ mount: true });
  unmountCounter = () => this.setState({ mount: false });
  // Job Component Functions
  addToJob = (e) => {
    e.preventDefault();
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
    });
  };

  deleteJob = (targetid) => {
    let found = this.state.jobs.find((job) => job.id === targetid);
    console.log(`Deleted job ${found.companyName} / ${found.positionTitle}`);
    this.setState({ jobs: this.state.jobs.filter((param) => param !== found) });
  };

  // Education Component Functions
  addToEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        schoolName: "",
        schoolTitle: "",
        schoolDate: "",
        id: uniqid(),
      },
    });
    console.log("hey");
    e.target.reset();
  };

  deleteEducation = (targetid) => {
    let found = this.state.educations.find(
      (education) => education.id === targetid
    );
    console.log(`Deleted education ${found.schoolName} / ${found.schoolTitle}`);
    this.setState({
      educations: this.state.educations.filter((param) => param !== found),
    });
  };
  //

  handleInputChange = (event) => {
    const target = event.target;

    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;
    const context = target.getAttribute("context");

    if (context == null) return console.error("! Theres no context specified.");

    let updatedState = this.state[context];
    updatedState[name] = value;

    this.setState({ [context]: updatedState });
  };
  render() {
    const { schoolName, schoolTitle, schoolDate } = this.state.education;
    const { email, fullName, phone } = this.state.personalInfo;
    const { companyName, positionTitle, mainTasks, startDate, endDate } =
      this.state.job;
    return (
      <div className="bg-gradient-to-r from-stone-50 via-stone-200 to-stone-50 text-stone-600">
        <LifecycleTutorial />
        <Header className="" />

        <div className="flex flex-col justify-start items-center mt-6 font-custom1">
          <PersonalInfo
            handleInputChange={this.handleInputChange}
            fullName={fullName}
            email={email}
            phone={phone}
            className="w-screen"
          />
          <Education
            handleInputChange={this.handleInputChange}
            addEducation={this.addToEducation}
            deleteEducation={this.deleteEducation}
            schoolName={schoolName}
            schoolTitle={schoolTitle}
            schoolDate={schoolDate}
            className="w-screen h-64"
            educations={this.state.educations}
          />
          <Experience
            handleInputChange={this.handleInputChange}
            addJob={this.addToJob}
            deleteJob={this.deleteJob}
            companyName={companyName}
            positionTitle={positionTitle}
            mainTasks={mainTasks}
            startDate={startDate}
            endDate={endDate}
            className="w-screen h-64"
            jobs={this.state.jobs}
          />
          <div className="flex text-gray-100 flex-row bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 justify-between p-2 w-full mt-12 font-custom2">
            YOUR GENERATED CV
          </div>
          <GeneratedCV
            fullName={fullName}
            email={email}
            phone={phone}
            schoolName={schoolName}
            schoolTitle={schoolTitle}
            schoolDate={schoolDate}
            jobs={this.state.jobs}
            educations={this.state.educations}
          />
        </div>
      </div>
    );
  }
}

export default App;
