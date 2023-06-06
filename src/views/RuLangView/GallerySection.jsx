import HomePageProjects from '../../components/Gallery/Gallery.jsx';
import PopUp from '../../components/popUp/Popup.jsx';
import {slickSettingGallerySection} from '../js/SlickSettings.js';
import Slider from "react-slick";
import { useState } from "react";
import { useSelector } from 'react-redux';
import '../css/gallery.scss'
// import { useState,useEffect } from "react";

function GallerySection() {
  const [currentImg, setCurrentImg] = useState(0);
  let allImages = useSelector(state => state.sliderImages.allImages);
      
  function ShowModal(index){
    setCurrentImg(index)
    document.getElementById('viewPostModalWrapper').style.display = "block";
    document.body.style.overflow = 'hidden';
    document.getElementById("html").style.overflow = 'hidden';
  }

  function closeReadMoremodal() {
    let el = document.getElementById('viewPostModalWrapper');
    el.style.display = "none";  
    document.body.style.overflow = 'visible'; 
    document.getElementById("html").style.overflow = 'visible';
  }

  document.addEventListener("keydown", escapePressed, false);

  function escapePressed(e) {
    var keyCode = e.keyCode;
    if(keyCode === 27) {
      closeReadMoremodal();
    }
  }
 
  return (
    <div id="portfolio" className='gallerySectionWrapper'>
      <h2 className='galleryHeader'>НАШИ РАБОТЫ</h2>
      <Slider {...slickSettingGallerySection}>  
        {allImages.map(function(item, i){                  
          return (
            <div key={i} onClick={()=>{ShowModal(i)}}>
							<HomePageProjects  header= {item.header} bodyText={item.bodyText}  imgName={item.imgName} />
            </div> 
          )           
        })}
      </Slider>
      <PopUp allImg = {allImages} currentIndex={currentImg} />
    </div>
  )
}

export default GallerySection;