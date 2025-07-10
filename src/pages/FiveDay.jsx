
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
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    getFiveDay();
  }, [location.state.cityId]);
  return (
    <>
      <h2>Five Day Forecast</h2>
      <div>{cityName}</div>
    </>
  );
}
export default FiveDay;