import React from 'react'
import SearchBar from './components/SearchBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
//import Weather from './pages/Weather'



import './App.css'
function App(){
  return (
    <div>
    <h1> Welcome Weather </h1>
    {/* <Routes>
      <Route path ="/" element= {<Home/>}/>
      <Route path ="/" element= {<Weather/>}/>
    </Routes> */}
    

    <SearchBar />
    </div>
  )
}
export default App;
