import './css/Contacts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope,faMapLocationDot,faAddressCard} from '@fortawesome/free-solid-svg-icons'
import EmailForm from '../components/sendMailForm/EmailForm.jsx'



function Contacts() {

    function ContactSlot (icon, headerText , body) {
        return (
          
            <div>
                <div className='contactSlotImg'><FontAwesomeIcon className='contactsFontAwesome' icon={icon} /></div>
                <div className='contactSlotText'>
                    <h4> {headerText} </h4>
                    <p> {body} </p>
                </div>
            </div>
        )
    }

return (
<div>
    <div className="Contacts">
        <div className="FormContainer">
            <EmailForm />
        </div>

        <div className='ContactsDetails'>  
        <h3 className='ContactFormHeader'>
                    <FontAwesomeIcon className='contactsFontAwesome' icon={faAddressCard} />
                    KONTAKTINFORMĀCIJA
                </h3>
            <div className='ContactsWrapper'> 
               
                {ContactSlot(faPhone ,"Telefona numurs",'+371 2672 2829')}
                
                {ContactSlot(faEnvelope ,"E-pasts",'info@msgrupa.lv')}

                {ContactSlot(faMapLocationDot ,'Juridiska Adrese' , 'Festivāla iela 1 - 38, Rīga, LV-1057')}
       
            </div>       
            <p  className='openTime'>
                    <FontAwesomeIcon className='contactsFontAwesome' icon={faMapLocationDot} />
                    Darba Laiks: <br />
                    Pirmdiena - Piektdiena: no 8:00 līdz 17:00 <br />
                    Sestdiena - Svētdiena: no 10:00 līdz 14:00
            </p>  
        </div>
        
    </div>

    <div className='googleMapWrapper'>
        <iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2178.621207499867!2d24.200363877474384!3d56.903880973531955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed214d98ad551%3A0xdf4486e66cb04e9c!2zRmVzdGl2xIFsYSBpZWxhIDEsIExhdGdhbGVzIHByaWVrxaFwaWxzxJN0YSwgUsSrZ2EsIExWLTEwNTc!5e0!3m2!1sen!2slv!4v1683408821849!5m2!1sen!2slv" style={{width: '100%', flex: '1 0 45%'}} height={380}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
)
}


export default Contacts;