import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.warnMsg !== "" ? (
          <div className="alert alert-danger">{this.props.warnMsg}</div>
        ) : this.props.succMsg !== "" ? (
          <div className="alert alert-success">{this.props.succMsg}</div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Modal;
