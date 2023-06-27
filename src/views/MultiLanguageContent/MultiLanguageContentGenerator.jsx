import { useSelector } from 'react-redux';

function NavBarContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let link1,link2, link3, link4, link5, link6,footerSlogan;
    switch(curentLanguage) {
        case 'ru':
            link1 = 'О НАС';
            link2 = 'СОЛНЕЧНЫЕ ПАНЕЛИ';
            link3 = 'ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ';
            link4 = 'РЕЗУЛЬТАТЫ';
            link5 = 'НАШИ РАБОТЫ';
            link6 = 'КОНТАКТЫ';
            footerSlogan ='ЗЕЛЕНАЯ ЭНЕРГЕТИКА';
          
            break;
        default:
            link1 = 'PAR MUMS';
            link2 = 'SAULES PANEĻI';
            link3 = 'ELEKTROMONTĀŽAS DARBI';
            link4 = 'REZULTĀTI';
            link5 = 'MŪSU DARBI ';
            link6 = 'KONTAKTI ';
            footerSlogan ='ZAĻĀ ENERĢIJA';
            break;
    }
    return {link1,link2, link3, link4, link5, link6, footerSlogan};
}


function AboutContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let headerText,btn;
    switch(curentLanguage) {
        case 'ru':
            headerText =  `SIA MsGrupa  \n Установка Солнечных Панелей и Электромонтажные Работы \n На рынке с 2014 года `;
            btn = 'КОНТАКТЫ';
            break;
        default:
            headerText = 'SIA MsGrupa \n Saules Paneļu Uzstādīšana un Elektromontāžas darbi \n Tirgū kopš 2014 gada ';
            btn = 'KONTAKTI';
            break;
    }
    return {headerText , btn};
}

function ContactsContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let phone,mail,address,contactSlotHeader,contactSlotBody,ContactFormHeader;
    switch(curentLanguage) {
        case 'ru':
            ContactFormHeader = 'Контактная информация';
            phone =  `Номер телефона:`;
            mail = 'Э-почта';
            address = 'Юридический Адрес';
            contactSlotHeader = 'Время работы: ';
            contactSlotBody = ' Понедельник - Пятница: с 8:00 до 19:00 \n  Суббота - : Выходной. \n  Воскресенье - Выходной.';
            break;
        default:
            ContactFormHeader = 'Kontaktinformācija';
            phone =  `Telefona numurs:`;
            mail = 'E-pasts:';
            address = 'Juridiskā Adrese:';
            contactSlotHeader = 'Darba Laiks: ';
            contactSlotBody = ' Pirmdiena - Piektdiena: no 8:00 līdz 19:00 \n Sestdiena - Brīvdiena. \n Svētdiena - Brīvdiena.';
            break;
    }
    return {ContactFormHeader, phone, mail, address, contactSlotHeader, contactSlotBody};
}

function GalleryContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let GalleryHeader;
    switch(curentLanguage) {
        case 'ru':
            GalleryHeader = 'НАШИ РАБОТЫ';
            break;
        default:
            GalleryHeader = 'MŪSU DARBI';
            break;
    }
    return {GalleryHeader};
}

function ElectroContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let ElectroSectionHeader,header1,header2,header3,header4,header5;
    switch(curentLanguage) {
        case 'ru':
            ElectroSectionHeader = 'ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ';
            header1 = 'Энергетическое строительство';
            header2 =  'Проектирование';
            header3 = 'Электроинсталяция';
            header4 = 'Молниезащита';
            header5 = 'Замеры изоляции ';

            break;
        default:
            ElectroSectionHeader = 'ELEKTROMONTĀŽAS DARBI';
            header1 = 'Energobūvniecība';
            header2 =  `Projektēšana`;
            header3 = 'Elektroinstalācija';
            header4 = 'Zibensaizsardzība';
            header5 = 'Elektromērījumi';
            break;
    }
    return {ElectroSectionHeader,header1,header2,header3,header4,header5};
}

function SolarContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let SolarSectionHeader,header1,header2,header3,header4,header5;
    switch(curentLanguage) {
        case 'ru':
            SolarSectionHeader = 'УСТАНОВКА СОЛНЕЧНЫХ ПАНЕЛЕЙ';
            header1 = 'Настройка инвертора';
            header2 =  'Инспекция проекта';
            header3 = 'Измерения электроустановок';
            header4 = 'Установка';
            header5 = 'Сертифицированные специалисты';

            break;
        default:
            SolarSectionHeader = 'SAULES  PANEĻU UZSTĀDĪŠANA';
            header1 = 'Invertora iestatījumi';
            header2 =  `Projekta pārbaude`;
            header3 = 'Elektroinstalācijas mērījumi';
            header4 = 'Uzstādīšana';
            header5 = 'Sertificētie speciālisti';
            break;
    }
    return {SolarSectionHeader,header1,header2,header3,header4,header5};
}

function MapContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let mapSectionHeader,stepsHeader1,stepsHeader2,stepsHeader3,stepsHeader4,clientCountHeader,progressbarHeader1,progressbarHeader2 ;
    switch(curentLanguage) {
        case 'ru':
            mapSectionHeader = 'ДОСТИГАЙТЕ РЕЗУЛЬТАТОВ ВМЕСТЕ С НАМИ!';
            stepsHeader1 = 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ';
            stepsHeader2 =  'ПОДПИСАТЬ КОНТРАКТ';
            stepsHeader3 = 'УСТАНОВКА';
            stepsHeader4 = 'РЕЗУЛЬТАТ';
            clientCountHeader = 'МЫ ПОЗАБОТИЛИСЬ \n  УЖЕ БОЛЕЕ ЧЕМ ОБ 500 \n КЛИЕНТАХ';
            progressbarHeader1 = 'СОЛНЕЧНЫХ ПАНЕЛЕЙ УСТАНОВЛЕНО:';
            progressbarHeader2 = 'ЭЛЕКТРОМОНТАЖНЫХ РАБОТ ЗАВЕРШЕНО:';
            break;
        default:
            mapSectionHeader = 'SASNIEDZ REZULTĀTUS KOPĀ AR MUMS!';
            stepsHeader1 = 'SAŅEMT PIEDĀVĀJUMU';
            stepsHeader2 =  'NOSLĒGT LĪGUMU';
            stepsHeader3 = 'UZSTĀDĪŠANA';
            stepsHeader4 = 'IZBAUDI REZULTĀTU';
            clientCountHeader = 'MĒS PARŪPĒJĀMIES \n JAU VAIRĀK NEKĀ PAR 500 \n KLIENTIEM ';
            progressbarHeader1 = 'UZSTĀDĪTIE SAULES PANEĻI:';
            progressbarHeader2 = 'ELEKTROMONTĀŽAS DARBI PABEIGTI :';
            break;
    }
    return {mapSectionHeader,stepsHeader1,stepsHeader2,stepsHeader3,stepsHeader4,clientCountHeader,progressbarHeader1,progressbarHeader2};
}

function EmailContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let contactFormHeader,sendingInProcess, successMsg, sendOneMoreMsg, names, surname, phone, eMail, message, sendBtn;
    switch(curentLanguage) {
        case 'ru':
            contactFormHeader = 'Связаться с нами';
            sendingInProcess = 'Отправка...';
            successMsg = 'Сообщение успешно отправлено';
            sendOneMoreMsg = 'Отправить еще одно ';
            names = 'Имя ';
            surname = 'Фамилия ';
            phone = 'Номер телефона ';
            eMail = 'Э-почта ';
            message = 'Сообщение';
            sendBtn = 'ОТПРАВИТЬ';
          
            break;
        default:
            contactFormHeader = 'Sazināties Ar Mums';
            sendingInProcess = 'Nosūtīšana...';
            successMsg = '  Ziņojums ir veiksmīgi nosūtīts';
            sendOneMoreMsg = ' Nosūtiet vēl vienu  ';
            names = 'Vārds ';
            surname = 'Uzvārds';
            phone = 'Telefona numurs ';
            eMail = 'E-pasts ';
            message = 'Ziņojums ';
            sendBtn = 'NOSŪTĪT';
            break;
    }
    return {contactFormHeader,sendingInProcess, successMsg, sendOneMoreMsg, names, surname, phone, eMail, message, sendBtn};
}



export {
    AboutContentByLanguage,
    ContactsContentByLanguage, 
    GalleryContentByLanguage, 
    ElectroContentByLanguage , 
    SolarContentByLanguage,
    MapContentByLanguage,
    EmailContentByLanguage,
    NavBarContentByLanguage
};