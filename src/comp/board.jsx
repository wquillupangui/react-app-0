import React, { Component } from "react";
import Mess from "./mess";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import InputMess from "./inputMess";
import { Panel } from "primereact/panel";
import Usr from "./usr";

class Board extends Component {
  state = {
    visible: false
  };
  render() {
    //console.log("this.children", this.props.children);
    let messx1 = [];
    if (this.props.children)
      messx1 = this.props.children.filter(m => !m.parent);
    //console.log("messx0", messx0);
    //const messx1 = messx0.map(m => this.getLevelObj(m));
    //console.log("messx1", messx1);
    //const aux = [].concat(...messx1);
    //console.log("aux", aux);
    return (
      <React.Fragment>
        <Panel>
          <div>
            <Usr
              value={this.props.user.name}
              style={{ float: "left", marginTop: 10 }}
            />

            <Toolbar className="middle">
              <div className="p-toolbar-group-left">
                <Button
                  label="New"
                  icon="pi pi-plus"
                  style={{ marginRight: ".25em" }}
                  onClick={this.handleShowNew}
                />
              </div>
              <div className="p-toolbar-group-right">
                <Button icon="pi pi-search" style={{ marginRight: ".25em" }} />

                <Button icon="pi pi-times" className="p-button-danger" />
              </div>
            </Toolbar>
          </div>
          {messx1.map(mess0 => (
            <>
              <Mess id={mess0.id} onReply={this.props.onMessage}>
                {mess0}
              </Mess>
              {this.getLevel(mess0, 2)}
            </>
          ))}
          <InputMess
            visible={this.state.visible}
            header="New: "
            onHide={this.handleHideNew}
            onYes={this.props.onMessage}
            idParent={null}
          />
        </Panel>
      </React.Fragment>
    );
  }

  handleShowNew = () => {
    this.setState({ visible: true });
  };

  handleHideNew = () => {
    this.setState({ visible: false });
  };

  getLevel = (obj0, lvl) => {
    //console.log("lvl", lvl);
    const messx1 = this.props.children.filter(m => m.parent === obj0.id);
    //console.log("lvl", messx1);
    return messx1.map(mess => (
      <>
        <Mess id={mess.id} level={lvl} onReply={this.props.onMessage}>
          {mess}
        </Mess>
        {this.getLevel(mess, 3)}
      </>
    ));
  };
}

export default Board;
