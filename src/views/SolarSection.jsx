import WorksWeDo from '../components/worksWeDo/WorksWeDo.jsx'
import React, { useState, useEffect } from "react";
import SetObserver from './js/observer.js'
import './css/solarPowerSection.scss'
import  {SolarContentByLanguage} from "./MultiLanguageContent/MultiLanguageContentGenerator.jsx";

function SolarSection() {
  let content = SolarContentByLanguage();
  let animationTrigerEl = "solarWorks";

  const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
    let src =  "./img/solarPowerMain.jpeg";

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setImagesAreLoaded(true)
    }, [src])



  if(window.innerWidth < 768){
    animationTrigerEl = "animationActivation";
  }

  function observerCallBack(){
    document.getElementById('solarWorksWeDoContainer').classList.add('solarWorksTransit');
  }

  useEffect(()=>{
    try {
      SetObserver(animationTrigerEl, 0.3 , 0.3, observerCallBack);
    } catch (error) {
      observerCallBack();
    }

   
  }, [animationTrigerEl]);

  return (
    <div id="solarWorks"  className=' solarWorksSectionWrapper'>
      <div className='solarPowerWorks'>
        <h4 className='SolarPowerWorksHeader'>{content.SolarSectionHeader}</h4>
        <div id="solarWorksWeDoContainer" className='worksWeDoContainer'>
          <WorksWeDo header= {content.header1}  imgName={"invertors.png"}/>
          <WorksWeDo header= {content.header2}  imgName={"plan.png"}/>
          <WorksWeDo header= {content.header3}  imgName={"measurements.png"}/>
          <WorksWeDo header= {content.header4}  imgName={"workProcess.png"}/>
          <WorksWeDo header= {content.header5}  imgName={"certificate.png"}/>
        </div>
      </div>

      {imagesAreLoaded 
          ? 
            <div id="animationActivation" className='solarPowerWorksImg' style={{backgroundImage: 'url("./img/solarPowerMain.jpeg"'}}></div>
          :
            <div className='flexItem'> <div id="animationActivation"  className='imgLazyLoaderSolarMainImg' > </div> </div>
        }

     
    </div>
  )
}

export default SolarSection;