import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";

// Components
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneratedCV from "./components/GeneratedCV";
import { FaUniversity } from "react-icons/fa";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phone: "",

      education: {
        schoolName: "1",
        schoolTitle: "2",
        schoolDate: "3",
      },
      educations: [],
    };
  }

  addToEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
    });
  };

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
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
      },
    });
  };
  render() {
    const { email, fullName, phone, schoolName, schoolTitle, schoolDate } =
      this.state;
    return (
      <div className="bg-gradient-to-r from-stone-50 via-stone-200 to-stone-50 text-stone-600">
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
            schoolName={schoolName}
            schoolTitle={schoolTitle}
            schoolDate={schoolDate}
            className="w-screen h-64"
          />

          <Experience />

          <div className="flex text-gray-100 flex-row bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 justify-between p-2 w-full mt-12 font-custom2">
            YOUR GENERATED CV
          </div>

          <GeneratedCV
            name={fullName}
            email={email}
            phone={phone}
            schoolName={schoolName}
            schoolTitle={schoolTitle}
            schoolDate={schoolDate}
          />
        </div>
      </div>
    );
  }
}

export default App;
