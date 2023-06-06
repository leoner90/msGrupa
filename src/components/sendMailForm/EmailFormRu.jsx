import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faEnvelopeCircleCheck , faPlus , faEnvelope} from '@fortawesome/free-solid-svg-icons'
import React, {useState } from 'react';
import './emailForm.scss'

function EmailForm () {
    let url = `https://cvportfolio.online/portfolio/msgrupa/BackEnd/123.php`;
    const [senderName, setSenderName] = useState('');
    const [senderSurname, setSenderSurname] = useState('');
    const [userMsg, setuserMsg] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState([]);
    const [errSuccessMsg, setErrSuccessMsg] = useState([]);
    
    function toggleEmailLoader() {
        let loader = document.getElementById('loaderWrapper');
        loader.style.display = "none";
    }

    function clearAllMsgShowSuccces(){
        setSenderName('');
        setSenderSurname('');
        setuserMsg('');
        setUserEmail('');
        setUserPhone('');
        setErrSuccessMsg([])
        let succesMsgWrapper = document.getElementById('SuccesWrapper');
        succesMsgWrapper.style.display = "flex";
    }

    function sendEmail(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', senderName);
        formData.append('surname', senderSurname);
        formData.append('msg', userMsg);
        formData.append('email', userEmail);
        formData.append('userPhone', userPhone);
        const requestOptions = {
            method: 'POST',
            mode: "cors",
            enctype: 'multipart/form-data',
            body: formData
        }

        let loader = document.getElementById('loaderWrapper');
        
        loader.style.display = "flex";
        fetch(url , requestOptions)
        .then((response) => response.json())
        
        .then(data => {

            if(data === 200) {
                setTimeout(toggleEmailLoader, 500);
                setTimeout(clearAllMsgShowSuccces, 500);
                
        
            } else {
                setErrSuccessMsg(data['ru']);
            }
            setTimeout(toggleEmailLoader, 500);
            
      
        }).catch(err => {
            setTimeout(toggleEmailLoader, 500);
            setErrSuccessMsg([])
        })
    }

    function sendOnotherMsg(){
        let succesMsgWrapper = document.getElementById('SuccesWrapper');
        succesMsgWrapper.style.display = "none";
    }



    return (
        <div className='emailFormWrapper'>
            <h3 className='ContactFormHeader'>Связаться с нами</h3>
            <div id='loaderWrapper'>
            <div className="loader"></div>
            <p>Отправка...</p>
            </div>

            <div id='SuccesWrapper'>
            <div className="success">
            <p>
                <FontAwesomeIcon className='successMsgAwesomeIcon'  icon={faEnvelopeCircleCheck} />
                Сообщение успешно отправлено
            </p>
            </div>
            <button className='sendOnotherMsgBtn' onClick={()=> sendOnotherMsg()}>
                Отправить еще одно 
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

            <form className='emailForm' >
                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>Имя Фамилия *</div>
                    <div className='formFullNameWrapper'>
                        <input required type="text" value={senderName} id="fname" name="firstname" placeholder="Имя" onChange={(e)=> setSenderName(e.target.value)}/>
                        <input required type="text" value={senderSurname} id="lname" name="lastname" placeholder="Фамилия" onChange={(e)=> setSenderSurname(e.target.value)}/>
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>Номер телефона *</div>
                    <div className='formFullNameWrapper'>
                        <input required type="text" value={userPhone}  name="phone" placeholder="Номер телефона" onChange={(e)=> setUserPhone(e.target.value)}/>
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>Э-почта *</div>
                    <div className='formFullNameWrapper'>
                        <input required type="text" value={userEmail}  name="email" placeholder="Э-почта" onChange={(e)=> setUserEmail(e.target.value)}/>
                    </div>
                </div>

                <div className='NameSectionWrapper messageWraper'>
                    <div className='NameLabel'>Сообщение*</div>
                    <div className='formFullNameWrapper textAreaWrapper'>
                        <textarea required value={userMsg} placeholder="Сообщение" onChange={(e)=> setuserMsg(e.target.value)}></textarea>
                    </div>
                </div>

                <button className='ContactFormSubmitBtn' type="submit" onSubmit={(e)=> sendEmail(e)}> 
                    <FontAwesomeIcon className='faEnvelopeSendMsg' icon={faEnvelope} /> 
                    ОТПРАВИТЬ
                </button>
                
            </form>
        </div>
    )
}

export default EmailForm;