import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faEnvelopeCircleCheck , faPlus , faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect,useRef  } from "react";
import { useSendEmailMutation } from '../../store/services.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setEmailStatus } from '../../store/slices/sendMail.js'
import  {EmailContentByLanguage} from "../../views/MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import ReCAPTCHA from "react-google-recaptcha"
import './emailForm.scss'

function EmailForm () {
    let content = EmailContentByLanguage();
    const dispatch = useDispatch();
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    const [ServerCall] = useSendEmailMutation();
    const [senderName, setSenderName] = useState('');
    const [senderSurname, setSenderSurname] = useState('');
    const [userMsg, setuserMsg] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState([]);
    const [errSuccessMsg, setErrSuccessMsg] = useState([]);
    const [loaderWrapperState, setLoaderWrapperState] = useState('none');
    const [succesMsgWrapper, setSuccesMsgWrapper] = useState('none');
    const recaptchaRef = useRef();
    let errors = useSelector(state => state.sendMail.errors);
    let success = useSelector(state => state.sendMail.success)

    function toggleEmailLoader() {
        setLoaderWrapperState('none');
    }

    function clearAllMsgShowSuccces(){
        setSenderName('');
        setSenderSurname('');
        setuserMsg('');
        setUserEmail('');
        setUserPhone('');
        setErrSuccessMsg([])
        setSuccesMsgWrapper('flex');
    }

    useEffect( () => {
        if(errors && errors !== 200 ) {
            curentLanguage === 'ru' ?   setErrSuccessMsg(errors['ru']) :  setErrSuccessMsg(errors['lv']);
        }
        
        if(success === 200) {
            setTimeout(clearAllMsgShowSuccces, 500);
            setTimeout(toggleEmailLoader, 500);
            
        } else if(success === 'error')  {
            setTimeout(toggleEmailLoader, 500);
        }
    }, [success, errors, curentLanguage]);

    async function sendEmail(e) {
        e.preventDefault();
        const token = await recaptchaRef.current.executeAsync();
        let formData = new FormData();
        formData.append('name', senderName);
        formData.append('token', token);
        formData.append('surname', senderSurname);
        formData.append('msg', userMsg);
        formData.append('email', userEmail);
        formData.append('userPhone', userPhone);
        ServerCall(formData);
        setLoaderWrapperState('flex');
        dispatch(setEmailStatus(false));
    }

    function customFormValidationTitle(e) {
        let msg = '';
        if(curentLanguage === 'ru') {
            msg = "Пожалуйста, заполните поля правильно!"
        } else {
            msg = "Lūdzu, Aizpildiet Laukus Pareizi!"
        }
        e.target.setCustomValidity(msg);
      
    }


    return (
        <div className='emailFormWrapper'>
            <h3 className='ContactFormHeader'>{content.contactFormHeader}</h3>
            <div id='loaderWrapper' style={{display: loaderWrapperState}}>
                <div className="loader"></div>
                <p>{content.sendingInProcess}</p>
            </div>

            <div id='SuccesWrapper' style={{display: succesMsgWrapper}}>
                <div className="success">
                    <p>
                        <FontAwesomeIcon className='successMsgAwesomeIcon'  icon={faEnvelopeCircleCheck} />
                        {content.successMsg}
                    </p>
                </div>
                <button className='sendOnotherMsgBtn' onClick={()=> setSuccesMsgWrapper('none')}>
                    {content.sendOneMoreMsg}   
                    <FontAwesomeIcon className='sendOnotherMsgAwasomeIcon'  icon={faPlus} />
                </button>
            </div>

            <div className='errMsgAligner'>
                {errSuccessMsg.map((err, index) => { 
                    return (
                        <p className='errMsg' key={index}>
                            <FontAwesomeIcon className='errorAwesomeIcon' icon={faTriangleExclamation} />
                            {err}
                        </p>
                    )
                })}
            </div>

            <form className='emailForm' onSubmit={(e) => sendEmail(e)} >    
                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>{content.names + ' ' +content.surname}  * </div>
                    <div className='formFullNameWrapper'>
                        <input 
                            onInvalid = { (e) => customFormValidationTitle(e) }
                            required type="text" value={senderName} id="fname" name="firstname" placeholder={content.names} 
                            onChange={(e)=> {setSenderName(e.target.value);  e.target.setCustomValidity("")}}
                        />
                        <input 
                            onInvalid = { (e) => customFormValidationTitle(e) }
                            required type="text" value={senderSurname} id="lname" name="lastname" placeholder={content.surname}  
                            onChange={(e)=> {setSenderSurname(e.target.value); e.target.setCustomValidity("");}}
                        />
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>{content.phone}  *</div>
                    <div className='formFullNameWrapper'>
                        <input 
                            onInvalid = { (e) => customFormValidationTitle(e) }
                            onChange={(e)=> {setUserPhone(e.target.value); e.target.setCustomValidity("") }}
                            required type="number" value={userPhone}  name="phone" placeholder={content.phone} 
                        />
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>{content.eMail}  *</div>
                    <div className='formFullNameWrapper'>
                        <input 
                            onInvalid = { (e) => customFormValidationTitle(e) }
                            required type="email" value={userEmail}  name="email" placeholder={content.eMail} 
                            onChange={(e)=> {setUserEmail(e.target.value); e.target.setCustomValidity(""); }}
                        />
                    </div>
                </div>

                <div className='NameSectionWrapper messageWraper'>
                    <div className='NameLabel'>{content.message} *</div>
                    <div className='formFullNameWrapper textAreaWrapper'>
                        <textarea 
                            onInvalid = { (e) => customFormValidationTitle(e) }
                            required value={userMsg} placeholder={content.message} 
                            onChange={(e)=> {setuserMsg(e.target.value); e.target.setCustomValidity("")}}
                        >
                        </textarea>
                    </div>
                </div>

                <ReCAPTCHA
                    className='recaptchaClass'
                    sitekey={"Captcha key here"}
                    size="invisible"
                    ref={recaptchaRef}
                    badge="inline"
                    hl={curentLanguage ? curentLanguage : 'lv'}
                />

                <button className='ContactFormSubmitBtn' type="submit"  > 
                    <FontAwesomeIcon className='faEnvelopeSendMsg' icon={faEnvelope} /> 
                    {content.sendBtn}
                </button>
            </form>
        </div>
    )
}

export default EmailForm;