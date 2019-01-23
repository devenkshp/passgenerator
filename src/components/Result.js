import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Result extends Component {
  state = {};
  render() {
    return (
      <div className="card-footer py-4">
        {this.props.succMsg !== "" ? (
          <p className="text-success alert py-0">{this.props.succMsg}</p>
        ) : (
          false
        )}
        <div className="input-group">
          <textarea
            type="text"
            readOnly={true}
            className="form-control"
            id="pass"
            placeholder="Find Your Password Here!"
            aria-describedby="copy"
            value={this.props.pass}
            onClick={this.props.selectPass}
          />
          <div className="input-group-append">
            <span
              className="input-group-text"
              id="copy"
              onClick={this.props.onCopy}
            >
              <FontAwesomeIcon icon="clipboard" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
