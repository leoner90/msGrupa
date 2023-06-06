import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from './router/index'
import NavBar from './components/header/NavBar.jsx'
import NavBarRu from './components/header/NavBarRu.jsx'
import HeaderInfoBar from './components/headerInfoBar/headerInfoBar.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
//  "homepage": "https://cvportfolio.online/portfolio/msgrupa/",

function App() {
  let curentLanguage = useSelector(state => state.contacts.currentLanguage);
  return (
    <div  className="App"  style={{ backgroundImage: "url('./mainBg.jpg')" }} >
      <div>
        <HeaderInfoBar />{/* Cookies Handler */}
        {curentLanguage === 'ru'  ?  <NavBarRu /> :  <NavBar />} 
        <div id="BodyWrapper" className='BodyWrapper'>
          <Router />       
        </div>     
      </div>
    </div>
  );
}

export default App;
