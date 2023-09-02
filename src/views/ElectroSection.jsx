import './css/electricalWorks.scss'
import WorksWeDo from '../components/worksWeDo/WorksWeDo.jsx'
import SetObserver from './js/observer.js'
import  {ElectroContentByLanguage} from "./MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import React, { useState, useEffect } from "react";

function ElectroSection() {
  let content = ElectroContentByLanguage();
	const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
  let src =  "./img/electroPower.jpg";

  function observerCallBack(){
    document.getElementById('ElectroWorksWeDoWrapper').classList.add('electroWorksTransit');
  }

  useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setImagesAreLoaded(true)
  }, [src])


  useEffect(()=>{
    try {
      SetObserver('electroWorks', 0.3 , 0, observerCallBack);
    } catch (error) {
      observerCallBack();
    }
  }, []);

  return (
    <div id="electroWorks" className='electritionWorksWrapper'>  
      {imagesAreLoaded 
        ? 
        <div  className='electritionWorksImg' style={{backgroundImage: 'url("./img/electroPower.jpg"'}}></div>
        :
        <div className='flexItem'> <div className='imgLazyLoaderElectritionMainImg' > </div>  </div> 
      }

      <div className='electricPowerWorks'>
        <h4 className='electricPowerWorksHeader'> {content.ElectroSectionHeader} </h4>
        <div id="ElectroWorksWeDoWrapper" className='worksWeDoContainer'>
          <WorksWeDo header= {content.header1}  imgName={"energyConstruction.png"}/>
          <WorksWeDo header= {content.header2}  imgName={"designing.png"}/>
          <WorksWeDo header= {content.header3}  imgName={"ElectricalInstallation.png"}/>
          <WorksWeDo header= {content.header4}  imgName={"LightningProtection.png"}/>
          <WorksWeDo header= {content.header5}  imgName={"ElectricalMeasurements.png"}/>
        </div>
      </div>
    </div>
  )
}

export default ElectroSection;