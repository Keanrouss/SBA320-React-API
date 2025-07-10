import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

function Home() {
  const [weather, setWeather] = useState(null);

  return (
    <>
      <div>
        <h1>Welcome Weather</h1>
        <SearchBar handleWeather={setWeather} />
      </div>
      <div>
        {weather ? (
          <>
            <Header weather={weather} />
            <div>
              <Link
                to='five-day'
                state={{ cityId: weather && weather.id ? weather.id : null }}
              >
                Five Day Forcast
              </Link>
            </div>
          </>
        ) : (
          'No Data Available'
        )}
      </div>
    </>
  );
}

export default Home;