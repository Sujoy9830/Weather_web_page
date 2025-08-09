import getGeneralWindDirection from "../lib/GetWindDirection";
import { GetWeatherIcons } from "../lib/GetWeatherIcons";
import Lottie from "lottie-react";
import { WiThermometer, WiHumidity, WiStrongWind, WiWindDeg, WiBarometer, WiFog } from "react-icons/wi";

export default function WeatherCard({ weather }) {
  if (!weather) {
    return ;
  }


  return (
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl rounded-xl p-6 max-w-lg mx-auto mb-5 mt-5 text-white ">
  {/* Location and Icon */}
    <div className="flex flex-col items-center">
        <Lottie animationData={GetWeatherIcons(weather.weather[0].main)} />
        <h2 className="text-2xl font-bold text-center mt-2">{weather.name}</h2>
        <p className="text-center text-gray-300">{weather.weather[0].description}</p>
        <p className="text-center text-emerald-400 text-3xl mt-2 font-bold">
        {Math.round(weather.main.temp)}°c
        </p>
    </div>

  {/* Weather Details */}

    <div className="grid grid-cols-2 gap-4 mt-6">
      {[
        {
          label: "Feels Like",
          value: `${Math.round(weather.main.feels_like)}°c`,
          icon: <WiThermometer className="text-3xl text-yellow-300 animate-pulse" />
        },
        {
          label: "Humidity",
          value: `${weather.main.humidity}%`,
          icon: <WiHumidity className="text-3xl text-blue-400 animate-bounce" />
        },
        {
          label: "Visibility",
          value: `${weather.visibility / 1000} km`,
          icon: <WiFog className="text-3xl text-gray-300 animate-fade" />
        },
        {
          label: "Wind Speed",
          value: `${weather.wind.speed} m/s`,
          icon: <WiStrongWind className="text-3xl text-green-300 animate-pulse" />
        },
        {
          label: "Wind Direction",
          value: `${getGeneralWindDirection(weather.wind.deg)} (${weather.wind.deg}°)`,
          icon: <WiWindDeg className="text-3xl text-orange-300 animate-spin" />
        },
        {
          label: "Air Pressure",
          value: `${weather.main.pressure} hPa`,
          icon: <WiBarometer className="text-3xl text-purple-300 animate-ping" />
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-slate-700/40 backdrop-blur-lg p-4 rounded-lg shadow-md flex items-center gap-3"
        >
          {item.icon}
          <div>
            <h3 className="font-semibold">{item.label}</h3>
            <p className="text-gray-200">{item.value}</p>
          </div>
        </div>
      ))}
    </div>

</div>

  );
}
