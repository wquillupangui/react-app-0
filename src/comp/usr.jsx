import React, { Component } from "react";
import img0 from "./../img/user_icon_2.svg";

class Usr extends Component {
  render() {
    //console.log("usr.props", this.props);
    return (
      <div style={this.props.style}>
        {this.getImage()}
        <span
          className="vmiddle"
          style={{ fontWeight: "bold", marginRight: 20 }}
        >
          {this.props.value}
        </span>
      </div>
    );
  }

  getImage() {
    //console.log("this.props", this.props);
    if (this.props.url)
      return (
        <img
          alt="usr"
          className="vmiddle"
          src={this.props.url}
          style={{ marginLeft: 10 }}
        />
      );
    else
      return (
        <img
          alt="usr"
          className="vmiddle"
          src={img0}
          style={{ marginLeft: 10 }}
        />
      );
  }
}

export default Usr;
