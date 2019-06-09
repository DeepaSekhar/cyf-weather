import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="searchBox">
            <textarea className="input">London</textarea>
            <button className="submit-button">Submit</button>
          </div>
        </header>
        <main className="app__main">
          <div className="main-data">
            <img
              className="main-image"
              src="https://placekitten.com/g/200/300"
              alt=" Clouds Overcast"
            />
          </div>

          <div className="detail">
            <div>
              <h4>overcast clouds</h4>
              <h3>Temperature 10* to 11*</h3>
              <h5>Humidity 78% Pressure 1008 48</h5>
            </div>

            <div className="container">
              <div className="item">
                <h5>3.00</h5>
                <img
                  className="sub-image"
                  src="https://placekitten.com/200/300"
                  alt="weather"
                />
                <h5>8*C</h5>
              </div>

              <div className="item">
                <h5>3.00</h5>
                <img
                  className="sub-image"
                  src="https://placekitten.com/200/300"
                  alt=""
                />
                <h5>8*C</h5>
              </div>

              <div className="item">
                <h5>3.00</h5>
                <img
                  className="sub-image"
                  src="https://placekitten.com/200/300"
                  alt=""
                />
                <h5>8*C</h5>
              </div>
              <div className="item">
                <h5>3.00</h5>
                <img
                  className="sub-image"
                  src="https://placekitten.com/200/300"
                  alt=""
                />
                <h5>8*C</h5>
              </div>

              <div className="item">
                <h5>3.00</h5>
                <img
                  className="sub-image"
                  src="https://placekitten.com/200/300"
                  alt=""
                />
                <h5>8*C</h5>
              </div>
              <div className="item">
                <h5>3.00</h5>
                <img
                  className="sub-image"
                  src="https://placekitten.com/200/300"
                  alt=""
                />
                <h5>8*C</h5>
              </div>
              <div className="item">
                <h5>3.00</h5>
                <img
                  className="sub-image"
                  src="https://placekitten.com/200/300"
                  alt=""
                />
                <h5>8*C</h5>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
