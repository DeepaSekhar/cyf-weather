import cloudy from "./img/weather-icons/cloudy.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import fog from "./img/weather-icons/fog.svg";
import snow from "./img/weather-icons/snow.svg";
import rain from "./img/weather-icons/rain.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import storm from "./img/weather-icons/storm.svg";

function iconCodeToSvg(id) {
  console.log(id);
  if (id > 801 && id < 805) {
    return mostlycloudy;
  } else if (id == 801) {
    return partlycloudy;
  } else if (id == 800) {
    return clear;
  } else if (id >= 700 && id <= 799) {
    return fog;
  } else if (id >= 600 && id <= 699) {
    return snow;
  } else if (id >= 500 && id <= 599) {
    return rain;
  } else if (id >= 300 && id <= 499) {
    return drizzle;
  } else if (id <= 300) {
    return storm;
  }
}
export default iconCodeToSvg;
