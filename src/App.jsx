import React from 'react'
import SearchBar from './components/SearchBar'
import { Routes, Route } from 'react-router-dom'
//import Weather from './pages/Weather'
import Home from './pages/Home'
import TenDay from './pages/TenDay'

function App() {

        
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/ten-day' element={<TenDay />} />
    </Routes> 
  )

}
export default App;
