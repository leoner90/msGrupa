import SliderAbout from "react-slick";
import {slickSettingAboutSection} from './js/SlickSettings.js';
import { Link } from "react-scroll";
import { useSelector } from 'react-redux';
import './css/aboutSection.scss'
import  {AboutContentByLanguage} from "./MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import { useState,useEffect } from "react";

function AboutSection() {
	let AboutPageSliderImg = useSelector(state => state.sliderImages.AboutPageSliderImg);
	let content = AboutContentByLanguage();

	//SLIDER LAZY LOAD
	function AboutSectionSliderImg(props) {
		const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
		let src =  "./img/headerSlider/" + props.item.imgName;

		useEffect(() => {
			const img = new Image()
			img.src = src
			img.onload = () => setImagesAreLoaded(true)
		}, [src])

		return (
			<div>
				{imagesAreLoaded 
					? 
						<div  className='aboutSectionSlider SliderWrap' style={{backgroundImage: 'url("./img/headerSlider/'+props.item.imgName + '"'}}  >
							<div className="dimmer"></div>
						</div>
					:
						<div className='imgLazyLoaderAbout' > </div> 
				}
			</div>
		)
	}
 
	return (
		<div id="home" className="AboutWrapper" >
			<SliderAbout {...slickSettingAboutSection}>
				{AboutPageSliderImg.map(function(item, i){
					return (
						<div  key={i}  >
							<AboutSectionSliderImg  item= {item}/>
						</div>
					)
				})}
			</SliderAbout>

			<div className='HomeFirstSectionWrapper'>
				<div className='HomeAboutText'>
					<h1 className="textAnimation">
						{content.headerText }
					</h1>
					<Link to={`contacts`}  smooth={true}>
						<button className='contactsBtn'> { content.btn}</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default AboutSection;