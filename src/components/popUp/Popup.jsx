import React, { useRef } from "react";
import HomePageProjects from '../Gallery/Gallery.jsx';
import SliderPopUp  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Popup.scss'
import {slickSettingPopUp} from "../../views/js/SlickSettings.js"

function ViewPostModal (props) {
    const sliderRef = useRef();
    document.addEventListener("keydown", escapePressed, false);

    //Close Modal
    function closeReadMoremodal() {
        props.setShowModal(false)
        document.body.style.overflow = 'visible'; 
        document.getElementById("html").style.overflow = 'visible';
    }
 
    function escapePressed(e) {
        let keyCode = e.keyCode;
        let esc = 27;
        if(keyCode === esc) {
            closeReadMoremodal();
        }
    }
 
    //Scroll to curent IMG , which was cliked
    if(props.currentIndex !== false) {
        sliderRef.current.slickGoTo(props.currentIndex)
    }
 
    return (
        <div id="viewPostModalWrapper" className="viewPostModalWrapper"  style={props.showModal ? {display: 'block'} : {display: 'none'} }>
            <div className='viewPostModalContent'>
                <button className='postViewCloseBtn'  onClick={()=> closeReadMoremodal()} > X  </button> 
                <SliderPopUp {...slickSettingPopUp} ref={sliderRef}>   
                    {props.allImg.map(function(item, i){                  
                        return (
                            <div className='PopUpContentWrapper' key={i} >
                                <HomePageProjects  header= {item.header} bodyText={item.bodyText}  imgName={item.imgName} />
                            </div> 
                        )           
                    })}
                </SliderPopUp>
            </div>
        </div>
    )
} 
export default ViewPostModal;