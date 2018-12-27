import React, { Component } from "react";
import moment from "moment";

class Dte extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <span className="vmiddle">{this.getDateDiff()}</span>
        <br />
        <span className="vmiddle" style={{ fontSize: "small" }}>
          {this.getDateFormat()}
        </span>
      </div>
    );
  }

  getDateFormat() {
    //return dateFormat(this.props.value, "yyyy, mm, dd h:MM:ss");
    return moment(this.props.value).format("YYYY MMM DD - kk:mm:ss");
  }
  getDateDiff() {
    return moment(this.props.value).fromNow();
  }
}

export default Dte;
