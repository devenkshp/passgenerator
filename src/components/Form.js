import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="form-input my-4 px-4">
        <p>
          Enter the length of your password
          <br /> &amp; hit the generate button
        </p>
        {this.props.warnMsg !== "" ? (
          <p className="text-danger alert m-0">{this.props.warnMsg}</p>
        ) : (
          false
        )}
        <input
          className="form-control"
          type="number"
          min="6"
          max="32"
          id="length"
          required
          autoFocus={true}
          placeholder="Between 6 and 32"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <button
          type="button"
          id="guess"
          className="btn btn-lg btn-success btn-block"
          onClick={this.props.generatePass}
        >
          Generate
        </button>
      </form>
    );
  }
}

export default Form;
