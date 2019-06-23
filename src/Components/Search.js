import React, { Component } from "react";

class Search extends React.Component {
  search(event) {
    console.log(event);
  }
  typing(event) {
    console.log("hi");
  }
  render() {
    return (
      <header className="app__header">
        <form className="searchBox" onSubmit={this.search}>
          <input
            type="text"
            className="input"
            value=""
            onChange={this.typing}
          />

          <input type="submit" className="submit-button" value="submit" />
        </form>
      </header>
    );
  }
}
export default Search;
