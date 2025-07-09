import React ,{ useState } from "react";
import SearchBar from "../components/SearchBar";


function Home() {
    const [weather, setweather] = useState(null)
    return (
         <div>
            <h1> Welcome Weather </h1>
            <SearchBar handleWeather={setweather} />
            {weather ? <Header/>}
            </div>
    )
}
export default Home;