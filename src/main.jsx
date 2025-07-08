import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar.jsx';
import './index.css'
import App from './App.jsx'

//main.jsx is same as index.js

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> 
    <App />
     </BrowserRouter>
  </StrictMode>,
)

// line 7 is same as const root = ReactDom.createRoot(document.getElementById('root))
//ask Jade if i need to change line 7 by adding the const root= since the current line 7 doesn't have the word ReactDom