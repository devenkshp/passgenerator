import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Result extends Component {
  render() {
    return (
      <div className="card-footer py-4">
        <div className="input-group">
          <textarea
            type="text"
            readOnly={true}
            className="form-control"
            id="pass"
            placeholder="Find your password here!"
            aria-describedby="copy"
            value={this.props.pass}
            onClick={this.props.selectPass}
          />
          <div className="input-group-append" title="Copy password.">
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
