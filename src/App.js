import React, { Component } from "react";
import moment from "moment";
import "./App.css";
import fakeWeather from "./Data/Fakeweather.json";
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
  render() {
    return (
      <div className="app">
        <Search />

        <main className="app__main">
          <CurrentWeather data={fakeWeather.list[0]} />
          <WeatherUpdate data={fakeWeather.list} />
        </main>
      </div>
    );
  }
}

export default App;
