
import './Gallery.scss';
import { faPlugCircleBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect  } from "react";
function HomePageProjects (props) {
    const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
    let src =   "./img/workImg/" + props.imgName;

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setImagesAreLoaded(true)
      }, [src])

    return (
        <div className={imagesAreLoaded ? 'homePageProjectWrapper' : 'imgLazyLoaderGallery' } 
        style={imagesAreLoaded ? {backgroundImage: 'url("./img/workImg/'+ props.imgName + '"'}: {}}
        >
            
            <div className='itemInfo '>
                <FontAwesomeIcon className="itemInfoFontAwesome" icon={faPlugCircleBolt} />
                <h4 className='itemInfoHeader'>{props.header}</h4>
                <h4 className='itemInfoBody'>{props.bodyText}</h4>
            </div>
 
        </div>
    )
}

export default HomePageProjects;