import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";
import Modal from "./components/Modal";

library.add(faClipboard);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null, password: "", warnMsg: "", succMsg: "" };

    this.generatePass = this.generatePass.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleChange = e => {
    this.setState({ value: e.target.value, warnMsg: "", succMsg: "" });
  };

  generatePass() {
    let length = this.state.value;
    let pass = "";
    if (length < 6 || length > 32) {
      this.setState({
        value: null,
        password: "",
        warnMsg: "Please enter a number between 6 and 30",
        succMsg: ""
      });
      setTimeout(() => this.setState({ warnMsg: "", succMsg: "" }), 3000);
    } else {
      for (let i = 0; i < length; i++) {
        let random = Math.round(Math.random() * 126 + 33);
        if (random > 126) {
          random -= 93;
        }
        pass += String.fromCharCode(random);
      }
      this.setState({
        password: pass,
        warnMsg: "",
        succMsg: ""
      });
    }
  }

  selectPass = () => {
    let e = document.getElementById("pass");
    e.select();
  };

  handleCopy() {
    if (this.state.password !== "") {
      this.selectPass();
      document.execCommand("copy");
      this.setState({ succMsg: "Password copied successfully!", warnMsg: "" });
    } else {
      this.setState({
        warnMsg: "Please generate password first!",
        succMsg: ""
      });
    }
    setTimeout(() => this.setState({ warnMsg: "", succMsg: "" }), 3000);
  }

  render() {
    return (
      <div className="card text-center">
        {this.state.warnMsg !== "" || this.state.succMsg !== "" ? (
          <Modal warnMsg={this.state.warnMsg} succMsg={this.state.succMsg} />
        ) : null}
        <Header />
        <Form
          handleChange={this.handleChange}
          generatePass={this.generatePass}
        />
        <Result
          pass={this.state.password}
          onCopy={this.handleCopy}
          selectPass={this.selectPass}
        />
      </div>
    );
  }
}

export default App;
