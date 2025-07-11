
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const FiveDay = () => {
  const [cityName, setCityName] = useState('');
  const [forecast, setForecast] = useState([]);
  const location = useLocation();


  useEffect(() => {
    const getFiveDay = async () => {
      try {
        if (location.state.cityId !== null) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?id=${location.state.cityId}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`
          );
          const fiveDayData = await response.json();


          if (fiveDayData.city?.name) {
            setCityName(fiveDayData.city.name);
          }


          if (fiveDayData.list?.length > 0) {
            const weatherDays = new Map();


            for (let item of fiveDayData.list) {
              const date = item.dt_txt.split(' ')[0]; // "2025-07-11"
              if (!weatherDays.has(date)) {
                weatherDays.set(date, item); // store only first occurrence for the day
              }
              if (weatherDays.size === 5) break; // stop once we have 5 days
            }


            setForecast(Array.from(weatherDays.values()));
          }
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };


    getFiveDay();
  }, [location.state.cityId]);


  return (
    <>
      <h2>Five Day Forecast</h2>
      <div>{cityName}</div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {forecast.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <strong>{new Date(item.dt_txt).toLocaleDateString()}</strong>
            {/* <div>Time: {new Date(item.dt_txt).toLocaleTimeString()}</div> */}
            <div> {item.main.temp} °F</div>
            <div>Feels Like: {item.main.feels_like} °F</div>
            <div>Humidity: {item.main.humidity}%</div>
            <div>Weather: {item.weather[0].description}</div>
          </li>
        ))}
      </ul>
    </>
  );
};


export default FiveDay;
