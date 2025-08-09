import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";
import.meta.env.VITE_API_KEY
import.meta.env.VITE_API_URL
import Lottie from "lottie-react";
import animated_world from './assets/World.json'

export default function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (location) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}?q=${location}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    setWeather(data);
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="bg-slate-900">
      <Navbar />
      <div className="flex flex-col  min-h-screen items-center justify-center">
          {!weather && (
            <p className="text-center text-gray-400 mb-3">
              <Lottie animationData={animated_world} className="h-70 mb-5"/>
              Search for a city to see weather details
            </p>
          )}
        <SearchBar onSearch={fetchWeather} />
        <WeatherCard weather={weather} />        
      </div>
      <div>
        <Footer />
      </div>   
    </div>
  );
}
