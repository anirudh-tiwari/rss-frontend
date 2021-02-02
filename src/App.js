import React, { Component } from "react";
import "./App.css";
import First from "./cmp/First";
import Provider from "./cmp/context";
import { Router } from "@reach/router";
// import Card from "./card";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Router>
            <First path="/*" />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
