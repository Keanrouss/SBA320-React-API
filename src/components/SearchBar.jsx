import React from "react";
import { useState } from "react";
import App from "../App";



function SearchBar(){
//const [city, setCity] = useState ('')
//const Browse= use()

    return(
        <form >
            <input
            type ="text"
            className="input"
            placeholder = "Enter a city name">
            </input>
            <button type="Submit">Search</button>
        </form>

       
    );
}

export default SearchBar;