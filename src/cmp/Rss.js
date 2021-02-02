import React from "react";
import { Link } from "@reach/router";

class Rss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/titlelist/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          character: data,
        });
      });
  }

  render() {
    if (this.state.character.length == 0) {
      return (
        <div>
          No Subscriptions Found
          <span>
            <Link style={{ backgroundColor: "unset" }} to="/add">
              Add Here
            </Link>
          </span>
        </div>
      );
    }
    return (
      <div>
        {this.state.character.map((data) => {
          return <p>{data.title}</p>;
        })}
      </div>
    );
  }
}

export default Rss;
