import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [maxtemperature, setmaxTemperature] = useState(null); 
  const [mintemperature, setminTemperature] = useState(null);// State to store temperature data
  const [humidity, setHumidity] = useState(null);
  const [wind ,setWind] =useState('')
  async function getweather() {
    const apikey = "3d21a4ae9b35ec83f4822aec8431d0ac";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("error");
      }
      const data = await response.json();
      const { main ,wind} = data;
      console.log(data);

      setmaxTemperature(main.temp_max);
      setminTemperature(main.temp_min);
      setHumidity(main.humidity);
      setWind(wind.speed);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="input-container">
          <input
            type="text"
            placeholder="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-full px-4 py-2 outline-none"
          />
          <button className="btn btn-outline" onClick={getweather}>
            Go
          </button>
        </div>
        <h2 className="text-3xl font-semibold mb-4">{city} Weather</h2>
        <div className="weather-info">
          <h2 className="text-2xl">Max Temperature: {maxtemperature}°C</h2>
          <h2 className="text-2xl">Min Temperature: {mintemperature}°C</h2>
          <h2 className="text-2xl">Humidity: {humidity}%</h2>
          <h2 className="text-2xl">Wind: {wind} m/s</h2>
        </div>
      </div>
    </div>
  );
  
};

export default Weather;

//

//3d21a4ae9b35ec83f4822aec8431d0ac
