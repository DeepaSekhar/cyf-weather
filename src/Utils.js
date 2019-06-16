import clearSvg from "./img/weather-icons/clear.svg";
import cloudySvg from "./img/weather-icons/cloudy.svg";
import { exportDefaultSpecifier } from "@babel/types";
function iconCodeToSvg(iconCode) {
  if (iconCode === "01d") {
    return clearSvg;
  }
  else
  return clearSvg;
}
export default iconCodeToSvg;
