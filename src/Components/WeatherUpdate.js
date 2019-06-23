import React from "react";
import WeatherChunks from "./WeatherChunk";
//mport { createConfigItem } from "@babel/core";

export default function WeatherUpdate(props) {
  return (
    <div className="container">
      {props.data.map(item => {
        return <WeatherChunks data={item} />;
      })}
    </div>
  );
}
