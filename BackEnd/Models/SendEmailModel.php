<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

class SendEmailModel 
{
    public function sendMailValidation( $name, $surname, $msg, $email, $phone, $token )
    {
        $errors = false;
          //CHECKS
        if  (trim($msg) == ''){
            $errors['ru'][] = 'Введите Сообщение';
            $errors['lv'][] = 'Ievadiet ziņojumu';
        }

        if  (trim($phone ) == ''){
            $errors['ru'][] = 'Введите Номер Телефона';
            $errors['lv'][] = 'Ievadiet tālruņa numuru';
        }

        if  (trim($name) ==''){
            $errors['ru'][] = 'Введите Имя';
            $errors['lv'][] = 'Ievadiet vārdu';
        }

        if  (trim($surname) ==''){
            $errors['ru'][] = 'Введите Фамилию';
            $errors['lv'][] = 'Ievadiet Uzvārdu';
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)  OR  trim($email) == '' ) {
            $errors['ru'][] = 'Ваш Емейл неверен';
            $errors['lv'][] = 'Jūsu e-pasts ir nepareizs';
        }

        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $data = ['secret'   => 'secret captcha key',
                    'response' =>  $token];
                    
        $options = [
            'http' => [
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($data) 
            ]
        ];
    
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        $isHuman = json_decode($result)->success;
        if(!$isHuman) {
            $errors['lv'][] = 'Jūs neesat izturējis ReCaptcha verifikāciju';
            $errors['ru'][] = 'Вы не прошли верификацию ReCaptcha';
        }
        return $errors;
    }

    public function sendMail( $name, $surname, $msg, $email, $phone, ) 
    {
        //Create an instance; passing `true` enables exceptions
       $mail = new PHPMailer(true);
       try {
           //Server settings
           $mail->isSMTP();                                           
           $mail->Host       = ' smtp.gmail.com ';   
           $mail->SMTPAuth   = true; 
           $mail->Username   = 'msgrupa.lv@gmail.com';
           $mail->Password   = 'SMTP KEY HERE';
           $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
           $mail->Port       = 465; 
           $mail->SMTPSecure = "ssl";
       
           //Recipients
           $mail->setFrom('info@msgrupa.lv', 'MsGrupa');
           $mail->addAddress('leonid.gurockin@gmail.com', 'MsGrupa');
           $mail->addAddress('msgrupa.lv@gmail.com', 'MsGrupa');
           $mail->addReplyTo($email, 'Client: '.$name.' '.$surname);
 
       
           //Content
           $mail->isHTML(true); 
           $mail->Subject = 'New Message From Msgrupa';

           $message = "
           <html> 
           <body color=\"#999\"> 
               <h4 style='color:green;'>
                   НОВОЕ СООБЩЕНИЕ ОТ:  
                   <p style='color:red; margin: 3px;'>Email: ".$email." </p>
                   <p style='color:red; margin: 3px;'>ИМЯ ФАМИЛИЯ: ".$name." ".$surname." </p>
                   <p style='color:red; margin: 3px;'>НОМЕР ТЕЛЕФОНА: ".$phone." </p>
               </h4>
               <hr>
               <h4> СООБЩЕНИЕ: </h4>
               <pre style='color:black'; padding:10px; font-size: 1.5vw;>".$msg." </pre> 
           </body> 
           </html>"; 

           $mail->Body    = $message;
           $mail->AltBody = $message;
           $mail->send();
           return true;

       } catch (Exception $e) {
        return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
       }
    }
}