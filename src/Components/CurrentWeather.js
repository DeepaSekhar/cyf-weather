import React from "react";
import FakecurrentWeather from "../Data/FakecurrentWeather.json";
import iconCodeToSvg from "../Utils.js";
export default function CurrentWeather() {
  const main = FakecurrentWeather.main;
  const weather = FakecurrentWeather.weather;
  const currentWeatherSvg = iconCodeToSvg(FakecurrentWeather.weather[0].icon);

  return (
    <section>
      <div className="main-data">
        <img
          className="main-image"
          src={currentWeatherSvg}
          alt=" Clouds Overcast"
        />
      </div>

      <div className="text-container">
        <h4>{weather[0].description}</h4>
        <h3>
          Temperature {main.temp_min}* to {main.temp_max}*
        </h3>
        <h5>
          Humidity {main.humidity}% Pressure {main.pressure}
        </h5>
      </div>
    </section>
  );
}
