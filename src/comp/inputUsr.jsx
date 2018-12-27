import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

class InputUsr extends Component {
  state = {
    value: ""
  };
  render() {
    return (
      <Panel header="User Name:" className="vmiddle" style={{ width: "70%" }}>
        <InputText
          value={this.state.value1}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <Button label="Ok" onClick={() => this.props.onOk(this.state.value)} />
      </Panel>
    );
  }
}

export default InputUsr;
