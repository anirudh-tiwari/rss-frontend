import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="jumbotron">
          <h2>RSS Reader</h2>
          <h5>This is a article aggregator site</h5>
          <p>
            This site is used to fetch all the new Articles of a day from your
            favorite websites.
          </p>
          <p>
            Instead of going to those websites you just need to come here for
            your daily feed.
          </p>
        </div>
        <div className="row" style={{ backgroundColor: "aliceblue" }}>
          <div className="col-sm-6">
            <h3 style={{ color: "#007bff" }}>Saves Time</h3>
            <p>
              It saves the hassle to go to different type of websites just to
              get the daily dose of Information.
            </p>
            <br /> <br />
            <h3 style={{ color: "#007bff" }}>Reader Mode</h3>
            <p>
              Packed with a Powerful Reader mode which is very helpful to
              decrease the clutter making it perfect for reading purposes.
            </p>
          </div>
          <div className="col-sm-6 text-center">
            <h3 style={{ color: "#007bff" }}>Easy To Use</h3>
            <p>
              It is designed in a manner so that anyone can use it effectively
              and efficiently.
            </p>{" "}
            <br /> <br />
            <h3 style={{ color: "#007bff" }}>Save Article For Later</h3>
            <p>
              It can also save the article which you like for later References.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
