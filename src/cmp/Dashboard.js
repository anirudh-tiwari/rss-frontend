import React from "react";
import { Link } from "@reach/router";
import Rss from "./Rss";

class Dashboard extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="jumbotron">
          <h1>Welcome to the RSS Reader</h1>
          <Link style={{ backgroundColor: "unset" }} to="/add">
            Add More Subbscriptions
          </Link>
          |
          <a href="url" style={{ backgroundColor: "unset" }}>
            Your Subbscriptions
          </a>
        </div>
        <Rss />
      </div>
    );
  }
}

export default Dashboard;
