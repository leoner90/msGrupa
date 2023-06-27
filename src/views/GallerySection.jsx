import HomePageProjects from '../components/Gallery/Gallery.jsx';
import PopUp from '../components/popUp/Popup.jsx';
import {slickSettingGallerySection} from './js/SlickSettings.js';
import { useGetGalleryMutation } from '../store/services.js'
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { useState,useEffect } from "react";
import './css/gallery.scss'
import  {GalleryContentByLanguage} from "./MultiLanguageContent/MultiLanguageContentGenerator.jsx";


function GallerySection() {
  let content = GalleryContentByLanguage();
  const [ServerCall] = useGetGalleryMutation();

 
  const [currentImg, setCurrentImg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let allImages = useSelector(state => state.sliderImages.allImages);

  useEffect(()=>{
    ServerCall();
  }, [ ServerCall]);

  function ShowModal(index){
    setShowModal(true);
    setCurrentImg(index);
    document.body.style.overflow = 'hidden';
    document.getElementById("html").style.overflow = 'hidden';
  }

 
  return (
    <div id="portfolio" className='gallerySectionWrapper'>
      <h2 className='galleryHeader'> {content.GalleryHeader} </h2>
      <Slider {...slickSettingGallerySection}>  
        {allImages.map(function(item, i){                  
          return (
            <div key={i} onClick={()=>{ShowModal(i)}}>
							<HomePageProjects  header= {item.header} bodyText={item.bodyText}  imgName={item.imgName} />
            </div> 
          )           
        })}
      </Slider>
      <PopUp allImg = {allImages} currentIndex={currentImg} showModal={showModal} setShowModal={setShowModal}/>
    </div>
  )
}

export default GallerySection;