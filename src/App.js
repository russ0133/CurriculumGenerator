import "./App.css";
import React, { Component } from "react";

// Components
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneratedCV from "./components/GeneratedCV";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phone: "",
      schoolName: "",
      schoolTitle: "",
      schoolDate: "",
    };
  }

  addEducation = () => ({
    // test
  });

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;

    this.setState({ [name]: value });
  };

  render() {
    const { email, fullName, phone, schoolName, schoolTitle, schoolDate } =
      this.state;
    return (
      <div className="bg-gradient-to-r from-stone-50 via-stone-200 to-stone-50 text-stone-600">
        <Header />

        <div className="flex flex-col justify-start items-center mt-6">
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

          <div className="h-max mt-12 w-full bg-stone-600 text-center align-center text-2xl shadow-lg">
            Your Generated CV
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
