import './header.scss';

import { faBars , faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import Logo from './Logo.jsx'
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import  {NavBarContentByLanguage} from "../../views/MultiLanguageContent/MultiLanguageContentGenerator.jsx";

function NavBar() {
    let content = NavBarContentByLanguage();
    const [navbarStatus, setNavbarStatus] = useState('');

    //LINK GENERETOR
    function linkGenerator( id , name){
        return (   
            <Link to={id} spy={true} hashSpy={true} smooth={true} offset={-70} duration={500}  onClick={() => { showMobileNavBar();}}  > 
                <FontAwesomeIcon className='caretForMobileMenu'  icon={faCaretRight} />
                {name}
            </Link>
        )
    }

    //SHOW HIDE MOBILE NAVBAR
    function showMobileNavBar() {
        if (window.innerWidth < 768) {
            if (navbarStatus !== 'flex') {
                setNavbarStatus('flex')
                document.body.style.overflow = 'hidden';
            } else {
                setNavbarStatus('')
                document.body.style.overflow = 'visible';
            }
        }
    }

    //OBSERVER TO DETECT NAVBAR ISN't PINNED ANYMORE
    useEffect(()=>{
        const el = document.querySelector(".NavBarWrapper");
        const observer = new IntersectionObserver( 
            ([e]) => e.target.classList.toggle("not-pinned", e.intersectionRatio < 1),
            { rootMargin: '0px',  threshold: [1] }
          );
          observer.observe(el);
    });

    function MenuForMobile() {
        return(
            <div className='MenuShowHideBtn'>
                <Logo /> 
                <FontAwesomeIcon  onClick={() => showMobileNavBar()}  icon={faBars} />   
            </div>
        )
    }
    return (        
        <div  className='NavBarWrapper'>
            {/* MOBILE NAV BAR , TO OPEN MAIN NAV BAR */}
            {MenuForMobile()}
            {/* MAIN NAV BAR , HIDDEN ON MOBILE SCREEN SIZE */}
            <div className='NavBar' style={{ display: navbarStatus }}>
                {MenuForMobile()} 
                <div className='DesktopLogo'><Logo /></div>
                <div className='navBarLinksWrapper'>
                    {linkGenerator( 'home' , content.link1 )}
                    {linkGenerator( 'solarWorks' , content.link2)}
                    {linkGenerator( 'electroWorks' , content.link3)} 
                    {linkGenerator( 'clientProgress', content.link4)} 
                    {linkGenerator( 'portfolio' , content.link5)}
                    {linkGenerator( 'contacts' , content.link6)} 
                    <Link className='hidden' to={'Footer'}  hashSpy={true} smooth={true} offset={-160} duration={500}> </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;