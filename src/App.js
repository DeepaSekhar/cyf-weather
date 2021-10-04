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
      isLoading: true,
      info: {}
    };
  }
  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=238009cae947ae16ebe8349714155ccc"
    )
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          this.setState({
            isLoading: false,
            info: data
          });
        }, 1500);
      });
  }
  fetchData() {
    var city = "miami";
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=238009cae947ae16ebe8349714155ccc`
    );
  }

  render() {
    if (this.state.isLoading) {
      return "Loading....";
    } else {
      console.log(this.state.info);
      return (
        <div className="app">
          <Search />

          <main className="app__main">
            <CurrentWeather data={this.state.info.list[0]} />

            {/* <WeatherUpdate data={fakeWeather.list} /> */}
            <WeatherUpdate data={this.state.info.list} />
          </main>
        </div>
      );
    }
  }
}

export default App;
