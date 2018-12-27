import React, { Component } from "react";
import { Panel } from "primereact/panel";
import Usr from "./usr";
import Dte from "./dte";
import Vte from "./vte";
import { Button } from "primereact/button";

import InputMess from "./inputMess";

class Mess extends Component {
  state = {
    visible: false
  };
  render() {
    //console.log("props", this.props.level);
    return (
      <div style={{ display: "flex" }}>
        <div style={this.getWidthByLevel()}>&nbsp;</div>
        <Panel
          style={{ width: "100%" }}
          header={
            <div
              style={{
                display: "-webkit-box",
                padding: "20px 0px",
                fontSize: "x-large"
              }}
            >
              <Vte value={this.props.children.votes} />
              <div style={{ padding: "0px 20px", width: "90%" }}>
                <span>{this.props.children.messx}</span>
              </div>
            </div>
          }
        >
          <div style={{ display: "-webkit-box" }} className="middle">
            {this.getReplyByLevel()}
            <div style={{ width: "25%" }}>&nbsp;</div>

            <Usr value={this.getUsrName()} style={{ width: "40%" }} />
            <Dte value={this.props.children.pubDate} style={{}} />
          </div>
        </Panel>
        <InputMess
          visible={this.state.visible}
          header={"Reply To: " + this.props.children.messx}
          onHide={this.handleHideReply}
          onYes={this.props.onReply}
          idParent={this.props.id}
        />
      </div>
    );
  }

  handleShowReply = () => {
    this.setState({ visible: true });
  };

  handleHideReply = () => {
    this.setState({ visible: false });
  };

  getWidthByLevel() {
    if (!this.props.level) return { width: "0%" };
    else if (this.props.level === 1) return { width: "0%" };
    else if (this.props.level === 2) return { width: "10%" };
    else return { width: "20%" };
  }

  getReplyByLevel = () => {
    if (!this.props.level || this.props.level <= 2)
      return (
        <Button
          label="Reply"
          icon="pi pi-comments"
          onClick={this.handleShowReply}
        />
      );
    else return "";
  };

  getUsrName = () => {
    //console.log("mess.this.props.children", this.props.children);
    if (this.props.children) return this.props.children.usr.name;
    else return "";
  };
}

export default Mess;
