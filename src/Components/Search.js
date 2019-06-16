import React from "react";

export default function Search() {
  return (
    <header className="app__header">
      <div className="searchBox">
        <textarea className="input">London</textarea>
        <button className="submit-button">Submit</button>
      </div>
    </header>
  );
}
