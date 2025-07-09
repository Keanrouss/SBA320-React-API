import React from 'react'
import SearchBar from './components/SearchBar'
import { Routes, Route } from 'react-router-dom'
//import Weather from './pages/Weather'
import Home from './pages/Home'

function App() {

        
  return (
    <Routes>
      <Route index element={<Home/>}/>
    </Routes> 
  )

}
export default App;
