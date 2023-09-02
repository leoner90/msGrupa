import './worksWeDo.scss'
import { useState, useEffect } from "react";
function WorksWeDo(props) {
    const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
    let src =   "./img/WorksWeDo/" + props.imgName;

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setImagesAreLoaded(true)
      }, [src])

    return (
        <div className='worksWeDoWrapper'>
            <div className='worksWeDoLogoWrapper'>
                {imagesAreLoaded 
                ? 
                    <img    alt= "works we do" className='worksWeDoWrapperLogo' src={"./img/WorksWeDo/" + props.imgName}  />
                :
                    <div className='imgLazyLoaderWorksWeDo' > </div> 
                }
            </div>
            <h4 className='worksWeDoHeader'> {props.header}</h4>
        </div>
    )
}

export default WorksWeDo;