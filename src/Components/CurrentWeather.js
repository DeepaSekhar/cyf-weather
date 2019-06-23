import React from "react";
import iconCodeToSvg from "../Utils.js";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
export default function CurrentWeather(props) {
  return (
    <div className="main-data">
      <img className="main-image" src={mostlycloudy} alt="" />

      <div className="text-container">
        <div>
          <span> Temperature</span>
          <span>
            {" "}
            {Math.round(props.data.main.temp_min)}&deg;C to
            {Math.round(props.data.main.temp_max)}&deg;C{" "}
          </span>
        </div>

        <div>
          <span>Humidity </span>
          <span>{props.data.main.humidity}% </span>
          <span>Pressure</span>
          <span>{props.data.main.pressure}</span>
        </div>
      </div>
    </div>
  );
}
