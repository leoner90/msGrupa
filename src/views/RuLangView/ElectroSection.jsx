import '../css/electricalWorks.scss'
import React, { useEffect } from "react";
import WorksWeDo from '../../components/worksWeDo/WorksWeDo.jsx'
import SetObserver from '../js/observer.js'

function ElectroSection() {
  function observerCallBack(){
    document.getElementById('ElectroWorksWeDoWrapper').classList.add('electroWorksTransit');
  }

  useEffect(()=>{
    SetObserver('electroWorks', 0.3 , 0, observerCallBack);
  }, []);

  return (
    <div id="electroWorks" className='electritionWorksWrapper'>  
      <div  className='electritionWorksImg' style={{backgroundImage: 'url("./img/electroPower.jpg"'}}></div>
      <div className='electricPowerWorks'>
        <h4 className='electricPowerWorksHeader'> ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ </h4>
        <div id="ElectroWorksWeDoWrapper" className='worksWeDoContainer'>
          <WorksWeDo header= {"Энергетическое строительство"}  imgName={"energyConstruction.png"}/>
          <WorksWeDo header= {"Проектирование"}  imgName={"designing.png"}/>
          <WorksWeDo header= {"Электроинсталяция"}  imgName={"ElectricalInstallation.png"}/>
          <WorksWeDo header= {"Молниезащита"}  imgName={"LightningProtection.png"}/>
          <WorksWeDo header= {"Замеры изоляции"}  imgName={"ElectricalMeasurements.png"}/>
        </div>
      </div>
    </div>
  )
}

export default ElectroSection;