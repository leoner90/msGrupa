import SetObserver from './js/observer.js'
// import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import  {MapContentByLanguage} from "./MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import './css/mapSection.scss'
 

function MapSection() {
  let content = MapContentByLanguage();
  const [solarProjects, SetSolarProjects] = useState(0);
  const [electroProjects, SetElectroProjects] = useState(0);
  const [mapImgIsLoaded, setMapImgIsLoaded] = useState(false);
  let mapsrc =  "./img/LVmap.jpg";

  useEffect(() => {
      const img = new Image()
      img.src = mapsrc
      img.onload = () => setMapImgIsLoaded(true)
  }, [mapsrc])

  useEffect(()=>{
    function observerCallBack(){
      let target = document.querySelectorAll(".InfoArrow");
      for (var i = 0; i < target.length; ++i) {
        target[i].classList.add('InfoArrowAnimation');
        target[i].style.animationDelay = i/ 1.5 + "s";
      }
    }

    function counterIncrease(i, maxVal, callBackSetter) {
      //2000 - 2 sec animationa time in css for progress bar
      //calltime how often recursive fun is called
      //k how many times recursive fun will be called in 2 sec time
      //i = increase each call by max Value divided by k , so any number passed will be finished in same time of 2 sec
      let calltime = 50;
      let k = 2000 / calltime;
      callBackSetter(parseInt(i));
      i = i + maxVal / k;
      if (i <= maxVal) {
        setTimeout(function() {counterIncrease(i, maxVal, callBackSetter)}, calltime);
      } 
    }

    function observerCallBack2(){
      let target = document.querySelectorAll(".progressBarInner");
      counterIncrease(0, 10000, SetSolarProjects );
      counterIncrease(0, 500, SetElectroProjects );
      for (var i = 0; i < target.length; ++i) {
        target[i].classList.add('fillProgressBar');
      }
    }

  try {
    SetObserver('stepsContentWrapper', 0.3 , 0, observerCallBack);
    SetObserver('clientCountProgressBars', 0.3 , 0, observerCallBack2);
  } catch (error) {
    observerCallBack();
    observerCallBack2();
  }
}, []);

  function StepsSection (body,id,imgLink) {
    const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
    let src =  imgLink;

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setImagesAreLoaded(true)
    }, [src])

    return (
      <div id={id} className='stepsContentWrapper'>
        <div className='stepsImgWrapper'>
        {imagesAreLoaded 
          ? 
          <img className='stepsImg' src={imgLink} alt="asd"  />
          :
              <div className='imgLazyLoaderStepsImg' > </div> 
        }

         
        </div>
        <h4 className='stepsHeader'> {body}</h4>
      </div>
    )
  }

  function ArrowSection (rotate) {
    return (
      <div className='InfoArrow'>
          <img  className= {rotate ? 'InfoArrowImg rotateArrow':  'InfoArrowImg'} src='./img/arrow.jpg' alt='>'   />
      </div>
    )
  }

  function ProgressBar (progressbarHeader,clientsCount) {
    return (
      <div>
      <p className='progressbarHeader'>{progressbarHeader}</p>
      <div className='progressBarOuter'>
        <div className='progressBarInner ' >
          <div className='percentage'> {clientsCount} + </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div id="clientProgress" className='MapSection'>
      <div>
        <h3 className='mapSectionHeader'>{content.mapSectionHeader}</h3>
        <div className='stepsToPerformSolarOrderWrapper'>
          {/* <Link to={`contacts`}  smooth={true} >
          </Link> */}
          {StepsSection (content.stepsHeader1,'stepsContentWrapper' , './img/priceList.png')}
          {ArrowSection()}
          {StepsSection (content.stepsHeader2,'' , './img/agreementLogo.png')}
          {ArrowSection(true)}
          {StepsSection (content.stepsHeader3,'' , './img/gearLogo.png')}
          {ArrowSection()}
          {StepsSection (content.stepsHeader4,'' , './img/energyLogo.png')}
        </div>
      </div>
      {mapImgIsLoaded 
          ? 
            <img className='LvmapImg' src="./img/LVmap.jpg" alt='LVmap'/>
          :
            <div className='MapflexItem'> <div className='imgLazyLoaderLvmapImg' > </div> </div>
        }
      
      <div className='flex'>
        <div className='clientCount'>
          {content.clientCountHeader}
        </div>
        <div id="clientCountProgressBars" className='clientCountProgressBar' style={{backgroundImage: 'url("./img/clientsBG.jpg"'}}>
          {ProgressBar(content.progressbarHeader1 , solarProjects)}
          {ProgressBar(content.progressbarHeader2 , electroProjects)}
        </div>
      </div>
    </div>
  )
}

export default MapSection;