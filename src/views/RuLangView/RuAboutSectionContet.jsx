import { Link } from "react-scroll";
function aboutSection(language) {
    switch(language) {
        case 'ru':
            return(
                <div className='HomeAboutText'>
                    <h1 className="textAnimation">
                        SIA MsGrupa <br />
                        Установка солнечных панелей и электромонтажные работы <br />
                        На рынке с 2014 года <br />
                    </h1>
                    <Link to={`contacts`}  smooth={true}>
                        <button className='contactsBtn'>КОНТАКТЫ</button>
                    </Link>
                </div>
                
            )
        default:
            return(
                <div className='HomeAboutText'>
                    <h1 className="textAnimation">
                        SIA MsGrupa <br />
                        Saules Panelu Uzstādīšana un Elektromontāžas darbi <br />
                        Tirgū kopš 2014 gada <br />
                    </h1>
                    <Link to={`contacts`}  smooth={true}>
                        <button className='contactsBtn'>KONTAKTI</button>
                    </Link>
                </div>
            )
      }
}




export {aboutSection};