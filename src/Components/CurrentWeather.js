import React from "react";
import iconCodeToSvg from "../Utils.js";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
export default function CurrentWeather(props) {
  return (
    <section>
      <div className="main-data">
        <img className="main-image" src={mostlycloudy} alt="" />

        <div className="text-container">
          <h3>
            Temperature {Math.round(props.data.main.temp_min)}&deg;C to
            {Math.round(props.data.main.temp_max)}&deg;C
          </h3>
          <h5>
            Humidity {props.data.main.humidity}% Pressure
            {props.data.main.pressure}
          </h5>
        </div>
      </div>
    </section>
  );
}
