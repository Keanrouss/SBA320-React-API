import React ,{ useState } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const [weather, setweather] = useState(null)
    const navigate = useNavigate();
    //console.log('Navigate Hook', navigate)

    const handleNavigate= () => {;
    navigate('ten-day');
    }
    return (
         <div>
            <h1> Welcome Weather </h1>
            <SearchBar handleWeather={setweather} />
            <div>{weather ? <Header weather={weather}/> : 'No data Available'}
            </div>
            <div>
                <Link onClick={handleNavigate}>10 Day Forecast</Link>
            </div>
            </div>
    )
}
export default Home;
