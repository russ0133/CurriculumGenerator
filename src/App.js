import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-stone-50 via-stone-200 to-stone-50 box-border text-neutral-100 h-screen">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
