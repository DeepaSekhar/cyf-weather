import React, { Component } from "react";
import "./App.css";

import FakeWeather from "./Data/Fakeweather.json";
import weatherImage from "./img/weather-icons/clear.svg";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import WeatherUpdate from "./Components/WeatherUpdate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc: "https://placekitten.com/200/300"
    };
  }
  updateWeather() {
    const weather = FakeWeather.map(item => (
      <WeatherUpdate WeatherUpdate={item} />
    ));
  }
  render() {
    console.log(weatherImage);
    return (
      <div className="app">
        <Search />

        <main className="app__main">
          <CurrentWeather />
          {this.weather}
        </main>
      </div>
    );
  }
}

export default App;
