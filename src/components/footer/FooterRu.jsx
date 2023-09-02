import './footer.scss'
import { Link } from "react-scroll";
import Logo from '../header/Logo.jsx'
import React, { useEffect } from "react";
import Windmill from '../windMill/windMill.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SetObserver from '../../views/js/observer.js'
import {faCaretRight, faPhone, faEnvelope, faMapLocationDot , faClock } from '@fortawesome/free-solid-svg-icons'
import  {ContactsContentByLanguage, NavBarContentByLanguage} from "../../views/MultiLanguageContent/MultiLanguageContentGenerator.jsx";

function Footer() {
  let content = ContactsContentByLanguage();
  let navBarContent = NavBarContentByLanguage();

  function fontAwesome(value, className) {
    return <FontAwesomeIcon className={className} icon={value} />
  }
  
  function linkGenerator(id, name){
    return (
      <Link to={id} smooth={true} offset={-150} duration={500} >
        {fontAwesome(faCaretRight, 'footeMenuFontAwesome')}
        {name}
      </Link>
    )
  }

  function observerCallBack(){
    document.getElementById('footerContacts').classList.add('animation');
  }

  useEffect(()=>{
    try {
      SetObserver('Footer', 0.2 , 0, observerCallBack);
    } catch (error) {
      observerCallBack();
    }
  }, []);

  function ContactSlot (icon, headerText, body) {
    return (
      <div>
        <div className='footerContactSlotImg'>
          <FontAwesomeIcon className='contactsFontAwesome' icon={icon} />
        </div>
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
          {ContactSlot(faPhone ,content.phone,'+371 2914 5975')}
          {ContactSlot(faEnvelope ,content.mail,'msgrupa.riga@gmail.com')}
          {ContactSlot(faMapLocationDot ,content.address , 'Festivāla iela 1 , Rīga, LV-1057')}
          <div className='openTime'>
            <div className='footerContactSlotImg'> 
              <FontAwesomeIcon className='contactsFontAwesome' icon={faClock} /> 
            </div>
            <div className='footerContactSlotText'>
              <h4 className='footerContactSlotHeader'>{content.contactSlotHeader} </h4>
              <p> {content.contactSlotBody} </p>
            </div>
          </div>
        </div>  
      </div>

      {/* MENU */}
      <div className='footerNavBar'>
        <h4 className='footerNavBarHeader'> CITAS LAPAS:</h4>
        <div className='center'>
          {linkGenerator( 'home' , navBarContent.link1 )}
          {linkGenerator( 'solarWorks' , navBarContent.link2)}
          {linkGenerator( 'electroWorks' , navBarContent.link3)} 
          {linkGenerator( 'clientProgress', navBarContent.link4)} 
          {linkGenerator( 'portfolio' , navBarContent.link5)}
          {linkGenerator( 'contacts' , navBarContent.link6)}   
        </div>
      </div>
     
      <div className="footerImage" style={{backgroundImage: `url("img/footeSteticImgMain.png")`}}>
        <h4 className='FooterSlogan'>{navBarContent.footerSlogan}</h4>
         {/* WINDMILL */}
         <Windmill size={110}  fromLeft={'3%'}/>
         <Windmill size={75}  fromLeft={'39%'} extraClassName="windmillSpeed2"/>
         <Windmill size={50}  fromLeft={'65%'} extraClassName="windmillSpeed3"/>
      </div> 
    </div>
  )
}

export default Footer;