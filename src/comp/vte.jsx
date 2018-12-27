import React, { Component } from "react";
import { Button } from "primereact/button";

class Vte extends Component {
  state = {
    numberVotes: this.props.value
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "xx-large",
            padding: 8
          }}
        >
          {this.state.numberVotes}
        </span>
        <br />
        <Button
          icon="pi pi-caret-down"
          className=""
          onClick={this.handleDown}
        />

        <Button icon="pi pi-caret-up" className="" onClick={this.handleUp} />
      </div>
    );
  }

  handleUp = () => {
    this.setState({ numberVotes: this.state.numberVotes + 1 });
  };
  handleDown = () => {
    this.setState({ numberVotes: this.state.numberVotes - 1 });
  };
}
export default Vte;
