import Lottie from "lottie-react";
import clear_weather from "../assets/Weather_sunny.json";
import cloudy_weather from "../assets/Weather_windy.json";
import rain_weather from "../assets/rainy_icon.json";
import snow_weather from "../assets/Weather_snow.json";

export const GetWeatherIcons = (main) => {
  const size = { height: 80, width: 80 };
  const weather = main.toLowerCase();

  if (weather === "clear") {
    return clear_weather;
  } 
  else if (weather === "clouds") {
    return cloudy_weather;
  } 
  else if (weather === "rain" || weather === "drizzle" || weather === "thunderstorm") {
    return rain_weather;
  } 
  else if (weather === "snow") {
    return snow_weather;
  } 
  else if (weather === "mist" || weather === "fog" || weather === "haze") {
    return "FOG"; // Replace with Lottie fog animation if you have one
  } 
  else {
    return cloudy_weather;
  }
};
