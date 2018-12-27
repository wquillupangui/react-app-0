import React, { Component } from "react";

import Board from "./comp/board";
import logo from "./logo.svg";
import "./App.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import InputUsr from "./comp/inputUsr";

library.add(faIgloo);

class App extends Component {
  state = {
    usrAux: { id: 1, name: "Washington", img: null },
    messxsAux: [
      {
        id: 1,
        messx: "Pregunta 0",
        pubDate: new Date(2018, 11, 23, 10, 33),
        votes: 2,
        parent: null,
        usr: { id: 1, name: "Washington", img: null }
      },
      {
        id: 2,
        messx: "Respuesta 1",
        pubDate: new Date(2018, 12, 10, 10, 33),
        votes: 6,
        parent: 1,
        usr: { id: 1, name: "Washington", img: null }
      },
      {
        id: 3,
        messx: "Subrespuesta 1",
        pubDate: new Date(2018, 12, 11, 10, 33),
        votes: 7,
        parent: 2,
        usr: { id: 1, name: "Washington", img: null }
      },
      {
        id: 5,
        messx: "Pregunta 1",
        pubDate: new Date(2018, 12, 15, 10, 33),
        votes: 5,
        parent: null,
        usr: { id: 1, name: "Washington", img: null }
      },
      {
        id: 4,
        messx: "Respuesta 2",
        pubDate: new Date(2018, 12, 20, 10, 33),
        votes: 1,
        parent: 1,
        usr: { id: 1, name: "Washington", img: null }
      },
      {
        id: 6,
        messx: "Respuesta 3",
        pubDate: new Date(2018, 12, 20, 10, 33),
        votes: 1,
        parent: 5,
        usr: { id: 1, name: "Washington", img: null }
      }
    ]
  };

  handleMessage = messx => {
    //console.log("messx", messx);
    messx.usr = this.state.usr;
    messx.pubDate = new Date();
    const idAux = this.state.messxs
      ? Math.max(...this.state.messxs.map(m => m.id)) + 1
      : 1;
    messx.id = idAux;
    //console.log("messx", messx);
    const messxs0 = this.state.messxs ? this.state.messxs : [];
    messxs0.push(messx);
    //console.log("messxs", messxs0);
    this.setState({ usr: this.state.usr, messxs: messxs0 });
  };

  handleInputName = val => {
    //console.log("value", val);
    this.setState({ usr: { id: 1, name: val, img: null } });
  };

  rendrerComps = () => {
    if (!this.state.usr) return <InputUsr onOk={this.handleInputName} />;
    else
      return (
        <Board onMessage={this.handleMessage} user={this.state.usr}>
          {this.state.messxs}
        </Board>
      );
  };

  render() {
    console.log("thisn", this.state.messxs);
    return (
      <React.Fragment>{this.rendrerComps()}</React.Fragment>
      /**<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }
}

export default App;
