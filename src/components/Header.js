import React, { Component } from "react";

const Wrapper = "flex flex-col justify-between text-gray-100 font-bold";

export class Header extends Component {
  render() {
    return (
      <div className={Wrapper}>
        <div className="flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-between p-5 w-full">
          <div>CV GENERATOR</div>
        </div>
      </div>
    );
  }
}

export default Header;
