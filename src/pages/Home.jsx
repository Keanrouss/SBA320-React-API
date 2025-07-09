import React ,{ useState } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

function Home() {
    const [weather, setweather] = useState(null)
    return (
         <div>
            <h1> Welcome Weather </h1>
            <SearchBar handleWeather={setweather} />
            {weather ? <Header weather={weather}/> : 'No data Available'}
            </div>
    )
}
export default Home;