import { Link } from "react-scroll";
function Logo () {
    return (
        <div className="logoWrapper">
            <Link to={'home'} className="flex items-center" offset={-120} duration={500}smooth={true} >
                <div className="MainLogo" style={{backgroundImage: 'url("img/logo.png")'}}></div>
                <div className='CompanyName'> MSGrupa</div>
            </Link>
        </div>
    )
}

export default Logo;