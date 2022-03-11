import React, { Component } from "react";
import Clock from "./Clock";
import Count from "./Count";
import Color from "./Color";

export default class IndexLearning extends Component {
  render() {
    return (
      <div>
        IndexLearning
        <Clock />
        <Count />
        <Color />
      </div>
    );
  }
}
