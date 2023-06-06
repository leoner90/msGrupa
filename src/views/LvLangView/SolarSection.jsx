import '../css/solarPowerSection.scss'
import SetObserver from '../js/observer.js'
import WorksWeDo from '../../components/worksWeDo/WorksWeDo.jsx'
import React, { useEffect } from "react";
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
            <h4 className='SolarPowerWorksHeader'>SAULES  PANEĻU UZSTĀDĪŠANA</h4>
                <div id="solarWorksWeDoContainer" className='worksWeDoContainer'>
                    <WorksWeDo header= {"Invertora  iestatīšana"}  imgName={"invertors.png"}/>
                    <WorksWeDo header= {"Projektu pārbaude"}  imgName={"plan.png"}/>
                    <WorksWeDo header= {"Elektroinstalācijas mērijumi"}  imgName={"measurements.png"}/>
                    <WorksWeDo header= {"Veicam montāžu"}  imgName={"workProcess.png"}/>
                    <WorksWeDo header= {"Sertificēti speciālisti"}  imgName={"certificate.png"}/>
                </div>
              
            </div>
            <div id="animationActivation" className='solarPowerWorksImg' style={{backgroundImage: 'url("./img/solarPower2.jpeg"'}}></div>
        </div>
    )
}

export default SolarSection;