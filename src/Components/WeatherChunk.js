import React from "react";
import Svgimage from "../Utils";
import moment from "moment";
export default function WeatherChunk(props) {
  const id = props.data.weather[0].id;
  const img = Svgimage(id);
  const hour = moment(props.data.dt_txt).format("hh, mm");

  return (
    <div className="item-container">
      <h5>{hour}</h5>
      <img className="sub-image" src={img} alt="weather" />
      <h5>{Math.round(props.data.main.temp)}&deg;C</h5>
    </div>
  );
}
