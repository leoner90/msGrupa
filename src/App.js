import React from 'react';
import { Router } from './router/index'
import NavBar from './components/header/NavBar.jsx'
import HeaderInfoBar from './components/headerInfoBar/headerInfoBar.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'

function App() {
  return (
    <div  className="App">
      <div>
        <HeaderInfoBar />{/* Cookies Handler */}
        <NavBar />
        <div id="BodyWrapper" className='BodyWrapper'>
          <Router />       
        </div>     
      </div>
    </div>
  );
}

export default App;