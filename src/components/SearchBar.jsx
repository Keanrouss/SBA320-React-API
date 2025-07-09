import React, { useRef } from 'react';

const SearchBar = ({handleWeather}) => {
  const inputRef = useRef(null);

  const handleSearch = async () => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=imperial&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const weather = await data.json();
      handleWeather(weather)
      console.log('Weather ', weather);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <form>
      <input
        type='text'
        className='input'
        placeholder='Enter a city name'
        ref={inputRef}
      ></input>
      <button type='button' onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;