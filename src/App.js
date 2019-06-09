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
          </div>
          <button className="submit-button">Submit</button>
        </header>
        <main className="app__main">
          <h1>DEEPA AKHIL</h1>
        </main>
      </div>
    );
  }
}

export default App;
