import React from "react";
// import ReactDOM from 'react-dom';
// import Card from './card';
// import Home from "./cmp/unauthorize/Home.js";
import About from "./About.js";
// import Listing from "./Listing.js";
// import Protected from "./cmp/Protected.js";
// import Nav from "./cmp/Nav.js";
// import Auth from "./cmp/Auth.js";
// import { Navbar as ani } from "./cmp/Navbar.js";
import Login from "./Login.js";
// import Signin from "./unauthorize/Signin.js";
// import Login_home from './cmp/Login_home.js';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { withRouter } from "react-router";
// import Logout from "./cmp/Logout";
import Navbar from "./Navbar";
// import Login_home from "./cmp/Login_home.js";
import { Context } from "./context";
import Home from "./Home.js";
import { Router } from "@reach/router";
import Dashboard from "./Dashboard.js";
// import Rss from "./Rss.js";
import Add from "./Add.js";

class First extends React.Component {
  static contextType = Context;
  componentDidMount() {
    var auth = JSON.parse(localStorage.getItem("auth"));

    auth ? this.context.LoginUser() : this.context.LogoutUser();
  }

  render() {
    return (
      <div>
        <Navbar />
        {!this.context.state.loggedin ? (
          <Router>
            <Login path="/login" />
            {/* <Signin path="/signin" /> */}
            <Home path="/" />
          </Router>
        ) : (
          <Router>
            <Dashboard path="/" />
            <Add path="/add" />
            <About path="/" />
          </Router>
        )}
      </div>
    );
  }
}

export default First;
