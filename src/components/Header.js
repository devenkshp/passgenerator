import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="card-header p-4">
        <h3 className="text-secondary">
          Random Password <br />
          Generator
        </h3>
      </header>
    );
  }
}

export default Header;
