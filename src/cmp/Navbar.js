import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "./context";
import { Link } from "@reach/router";
// import jwt_decode from "jwt-decode";

class Navbar extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.logout = () => {
      this.context.LogoutUser();
      var auth = JSON.parse(localStorage.getItem("auth"));
      localStorage.removeItem("auth");
    };
  }
  //   componentDidMount() {
  //     const token = localStorage.getItem("auth");
  //     const decoded = jwt_decode(token);
  //     this.setState({
  //       username: decoded.username,
  //     });
  //   }
  render() {
    return (
      <div>
        {!this.context.state.loggedin ? (
          <div>
            <nav
              className="navbar navbar-expand-sm bg-dark navbar-dark"
              style={{ padding: " 5px 50px" }}
            >
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <Link
                    to="/home"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    RSS Reader{" "}
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    About{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    API{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <i class="fa fa-user-plus" style={{ fontSize: "20px" }}></i>
                  <Link
                    to="/signin"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    Sign Up{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    Login{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <div>
            <nav
              className="navbar navbar-expand-sm bg-dark navbar-dark"
              style={{ padding: " 5px 50px" }}
            >
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <Link
                    to="/home"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    RSS Reader{" "}
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    About{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    API{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    FeedBack
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/listing"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    Listing
                  </Link>
                </li>
                <li className="nav-item">
                  <i class="fa fa-user-plus" style={{ fontSize: "20px" }}></i>
                  <Link
                    to="/signin"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                  >
                    {this.state.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/logout"
                    className="nav-link "
                    style={{ backgroundColor: "unset" }}
                    onClick={this.logout}
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
