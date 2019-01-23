import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";

library.add(faClipboard);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null, password: "", warnMsg: "", succMsg: "" };

    this.handleChange = this.handleChange.bind(this);
    this.generatePass = this.generatePass.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  generatePass() {
    let length = this.state.value;
    let pass = "";
    if (length < 6 || length > 30) {
      this.setState({
        password: "",
        warnMsg: "Please enter a number between 6 and 30",
        succMsg: ""
      });
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

  selectPass() {
    let e = document.getElementById("pass");
    e.select();
  }

  handleCopy() {
    if (this.state.password !== "") {
      this.selectPass();
      document.execCommand("copy");
      this.setState({ succMsg: "Password copied successfully!" });
    } else {
      this.setState({ succMsg: "Please generate password first!" });
    }
  }

  render() {
    return (
      <div className="card-container">
        <div className="card text-center">
          <Header />
          <Form
            handleChange={this.handleChange}
            generatePass={this.generatePass}
            warnMsg={this.state.warnMsg}
          />
          <Result
            pass={this.state.password}
            onCopy={this.handleCopy}
            selectPass={this.selectPass}
            succMsg={this.state.succMsg}
          />
        </div>
      </div>
    );
  }
}

export default App;
