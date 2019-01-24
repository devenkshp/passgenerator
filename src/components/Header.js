import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="card-header p-4">
        <h2 className="text-secondary">
          Random Password <br />
          Generator
        </h2>
      </header>
    );
  }
}

export default Header;
