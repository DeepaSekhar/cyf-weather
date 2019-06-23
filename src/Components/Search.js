import React, { Component } from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      cityName: " "
    };
  }
  search(event) {
    console.log(event);
  }
  inputTtyping(event) {
    this.setState({ cityName: event.target.value });
  }
  render() {
    return (
      <header className="app__header">
        <form className="searchBox" onSubmit={this.search}>
          <input
            type="text"
            className="input"
            value=""
            onChange={this.inputTyping}
          />

          <input type="submit" className="submit-button" value="submit" />
        </form>
      </header>
    );
  }
}
export default Search;
