import WorksWeDo from '../../components/worksWeDo/WorksWeDo.jsx'
import React, { useEffect } from "react";
import SetObserver from '../js/observer.js'
import '../css/solarPowerSection.scss'

function SolarSection() {
  let animationTrigerEl = "solarWorks";
  if(window.innerWidth < 768){
    animationTrigerEl = "animationActivation";
  }

  function observerCallBack(){
    document.getElementById('solarWorksWeDoContainer').classList.add('solarWorksTransit');
  }

  useEffect(()=>{
    SetObserver(animationTrigerEl, 0.3 , 0.3, observerCallBack);
  }, [animationTrigerEl]);

  return (
    <div id="solarWorks"  className=' solarWorksSectionWrapper'>
      <div className='solarPowerWorks'>
        <h4 className='SolarPowerWorksHeader'>УСТАНОВКА СОЛНЕЧНЫХ ПАНЕЛЕЙ</h4>
        <div id="solarWorksWeDoContainer" className='worksWeDoContainer'>
          <WorksWeDo header= {"Настройка инвертора"}  imgName={"invertors.png"}/>
          <WorksWeDo header= {"Инспекция проекта"}  imgName={"plan.png"}/>
          <WorksWeDo header= {"Измерения электроустановок"}  imgName={"measurements.png"}/>
          <WorksWeDo header= {"Установка"}  imgName={"workProcess.png"}/>
          <WorksWeDo header= {"Сертифицированные специалисты"}  imgName={"certificate.png"}/>
        </div>
      </div>
      <div id="animationActivation" className='solarPowerWorksImg' style={{backgroundImage: 'url("./img/solarPower2.jpeg"'}}></div>
    </div>
  )
}

export default SolarSection;