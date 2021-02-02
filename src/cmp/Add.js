import React from "react";
// import ReactDOM from 'react-dom';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.submit = (event) => {
      event.preventDefault();
      console.log("state", this.state);
      const data = {
        name: this.state.webname,
        url: this.state.weburl,
      };

      fetch("http://localhost:8000/link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result.json().then((resp) => {
          console.log(resp);
        });
      });
    };
  }
  render() {
    return (
      <div class="container">
        <div class="jumbotron">
          <h3>Add the websites RSS link and it's Name here</h3>
        </div>
        <form>
          <label for="email">Web name:</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Enter Web name"
            name="email"
            onChange={(e) => {
              this.setState({ webname: e.target.value });
            }}
          />
          <br />
          <label for="email">Web url:</label>
          <input
            type="text"
            class="form-control"
            id="pwd"
            placeholder="Enter Web url"
            name="pwd"
            onChange={(e) => {
              this.setState({ weburl: e.target.value });
            }}
          />
          <br />
          <button type="submit" class="btn btn-success" onClick={this.submit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
