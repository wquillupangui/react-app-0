import React, { Component } from "react";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

class InputMess extends Component {
  state = {
    value: {
      messx: "",
      votes: 0,
      parent: this.props.idParent
    }
  };

  handleChange = e => {
    this.setState({
      value: {
        messx: e.target.value,
        votes: 0,
        parent: this.props.idParent
      }
    });
  };

  handleYes = () => {
    this.props.onYes(this.state.value);
    this.props.onHide();
  };

  render() {
    const footer = (
      <div>
        <Button label="Yes" icon="pi pi-check" onClick={this.handleYes} />
        <Button
          label="No"
          icon="pi pi-times"
          onClick={this.props.onHide}
          className="p-button-secondary"
        />
      </div>
    );
    return (
      <Dialog
        header={this.props.header}
        visible={this.props.visible}
        modal={true}
        footer={footer}
        onHide={this.props.onHide}
      >
        <InputTextarea
          value={this.state.messx}
          onChange={this.handleChange}
          rows={5}
          cols={50}
        />
      </Dialog>
    );
  }
}

export default InputMess;
