
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



const FiveDay=() => {
    const [cityName, setCityName]= useState('')
    const [forecast, setForecast]= useState([])
    const location = useLocation();
   
    useEffect(() => {
    const getFiveDay = async () => {
      try {
        if (location.state.cityId !== null) {
          const data = await fetch(`
            https:api.openweathermap.org/data/2.5/forecast?id=${
              location.state.cityId
            }&appid=${import.meta.env.VITE_API_KEY}
          `);
          const fiveDayData = await data.json();
          console.log('five day data ', fiveDayData);
          // Store the name and store the list in state variables
          if (fiveDayData.city && fiveDayData.city.name) {
            setCityName(fiveDayData.city.name);
          }
          if (fiveDayData.list && fiveDayData.list.length > 0) {
            setForecast(fiveDayData.list)
          }
        }
        const dailyweather = {}
        fiveDayData.list.forEach(item => {
            const date = item.dt_txt.split("")[0]
            if (!dailyweather[date]){
                dailyweather[date]= item
            }  
        });
        //to generate the first 5 days only
        const fiveforecast = Object.values(dailyweather).slice(0,5)
        setForecast(fiveforecast)

      } catch (error) {
        console.error('Error: ', error);
      }
    };

    getFiveDay();
  }, [location.state.cityId]);// dependencies inside array for useeffect. Allow react to re-run everytime information inside array change. Look for changes.
  return (
    <div>
      <h2>Five Day Forecast</h2>
      <div>{cityName}</div>
   <ul style={{ listStyle: "none", padding: 0 }}>
        {forecast.map((day, index) => (
          <li
            key={index}
            style={{
              marginBottom: "1rem",
              margin: "10px",
              border: "1px solid #ccc",
              padding: "0.6rem",
              borderRadius: "8px",
            }}
          >
            <strong>{new Date(day.dt_txt).toLocaleDateString()}</strong>
            <div>Temp: {day.main.temp} °F</div>
            <div>Feels Like: {day.main.feels_like} °F</div>
            <div>Humidity: {day.main.humidity}%</div>
            <div>Weather: {day.weather[0].description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiveDay;