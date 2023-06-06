import './footer.scss'
import SetObserver from '../../views/js/observer.js'
import { Link } from "react-scroll";
import Logo from '../header/Logo.jsx'
import React, { useEffect } from "react";
import Windmill from '../windMill/windMill.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCaretRight, faPhone, faEnvelope,faMapLocationDot , faClock } from '@fortawesome/free-solid-svg-icons'
function fontAwesome(value, className) {
  return <FontAwesomeIcon className={className} icon={value} />
}

function linkGenerator( id , name){
  return (
      <Link to={id} smooth={true} offset={-150} duration={500} >
         {fontAwesome(faCaretRight, 'footeMenuFontAwesome')}
          {name}
      </Link>
  )
}


function Footer() {

  function observerCallBack(){
    document.getElementById('footerContacts').classList.add('animation');
  }

  useEffect(()=>{
    SetObserver('Footer', 0.2 , 0, observerCallBack);
  }, []);


  function ContactSlot (icon, headerText , body) {
    return (
        <div>
            <div className='footerContactSlotImg'><FontAwesomeIcon className='contactsFontAwesome' icon={icon} /></div>
            <div className='footerContactSlotText'>
                <h4 className='footerContactSlotHeader'> {headerText} </h4>
                <p> {body} </p>
            </div>
        </div>
    )
}
  return (
    <div id="Footer" className="Footer" >
      <div id="footerContacts" className='footerContacts'>
       <div className='footerLogo'> 
        <Logo />
       </div>

        <div className='ContactsWrapper'> 
          {ContactSlot(faPhone ,"Telefona numurs: ",'+371 2914 5975')}
          {ContactSlot(faEnvelope ,"E-pasts: ",'msgrupa.riga@gmail.com')}
          {ContactSlot(faMapLocationDot ,'Juridiska Adrese: ' , 'Festivāla iela 1 , Rīga, LV-1057')}
          <div className='openTime'>
          <div className='footerContactSlotImg'>
            <FontAwesomeIcon className='contactsFontAwesome' icon={faClock} />
          </div>
          <div className='footerContactSlotText'>
            <h4 className='footerContactSlotHeader'>  Darba Laiks: </h4>
            <p>  Pirmdiena - Piektdiena: no 8:00 līdz 19:00 <br />
            Sestdiena - Brīvdiena <br />
            Svētdiena - Brīvdiena.
            </p>
            </div>
          </div>
        </div>  


      </div>


      {/* MENU */}
      <div className='footerNavBar'>
        <h4 className='footerNavBarHeader'> CITAS LAPAS:</h4>
        <div className='center'>
          
           
          {linkGenerator( 'home' , 'PAR MUMS' )}
          {linkGenerator( 'solarWorks' , ' SAULES PANEĻI' )}
          {linkGenerator( 'electroWorks' , 'ELEKTROMONTĀŽA' )} 
          {linkGenerator( 'clientProgress' , 'REZULTĀTI' )} 
          {linkGenerator( 'portfolio' , 'MUSI DARBI' )}
          {linkGenerator( 'contacts' , 'KONTAKTI' )} 
                 
        </div>
      </div>
     
      <div className="footerImage" style={{backgroundImage: `url("img/footeSteticImgMain.png")`}}>
        <h4 className='FooterSlogan'>ZAĻĀ ENERĢIJA</h4>
         {/* WINDMILL */}
         <Windmill size={110}  fromLeft={'3%'}/>
         <Windmill size={75}  fromLeft={'39%'} extraClassName="windmillSpeed2"/>
         <Windmill size={50}  fromLeft={'65%'} extraClassName="windmillSpeed3"/>

      </div> 

      



    </div>
  )
}

export default Footer;