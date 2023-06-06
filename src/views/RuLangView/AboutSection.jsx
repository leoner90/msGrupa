import SliderAbout from "react-slick";
import {slickSettingAboutSection} from '../js/SlickSettings.js';
// import { Link } from "react-scroll";
import { useSelector } from 'react-redux';
import  {aboutSection} from "./RuAboutSectionContet.jsx";
import '../css/aboutSection.scss'

function AboutSection() {
	let curentLanguage = useSelector(state => state.contacts.currentLanguage);
	let AboutPageSliderImg = useSelector(state => state.sliderImages.AboutPageSliderImg);

	return (
		<div id="home" className="AboutWrapper" >
			<SliderAbout {...slickSettingAboutSection}>
				{AboutPageSliderImg.map(function(item, i){
					return (
						<div  key={i}  >
							<div className='aboutSectionSlider SliderWrap' style={{backgroundImage: 'url("./img/headerSlider/'+item.imgName+'"'}}>
								<div className="dimmer"></div>
							</div>
						</div>
					)
				})}
			</SliderAbout>
			<div className='HomeFirstSectionWrapper'>
				<div className='HomeAboutText'>
					{aboutSection(curentLanguage)}
				</div>
			</div>
		</div>
	)
}

export default AboutSection;