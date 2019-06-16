import React from "react";

import { createConfigItem } from "@babel/core";
export default function WeatherChunk(props) {
  const id = props.data.weather[0].id;
  if (id > 801 && id < 805) {
    console.log("mostlycloudy.svg");
  } else if (id == 801) {
    console.log("partlycloudy.svg");
  }
  return (
    <div className="detail">
      <div className="container">
        <div className="item">
          <h5>{props.data.dt_txt}</h5>
          <img
            className="sub-image"
            src="/src/img/weather-icons/clear.svg"
            alt="weather"
          />
          <h5>{Math.round(props.data.main.temp)}&deg;C</h5>
        </div>
      </div>
    </div>
  );
}
