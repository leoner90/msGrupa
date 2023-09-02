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
            $errors['errors']['ru'][] = 'Введите Сообщение';
            $errors['errors']['lv'][] = 'Ievadiet ziņojumu';
        }

        if  (trim($phone ) == ''){
            $errors['errors']['ru'][] = 'Введите Номер Телефона';
            $errors['errors']['lv'][] = 'Ievadiet tālruņa numuru';
        }

        if  (trim($name) ==''){
            $errors['errors']['ru'][] = 'Введите Имя';
            $errors['errors']['lv'][] = 'Ievadiet vārdu';
        }

        if  (trim($surname) ==''){
            $errors['errors']['ru'][] = 'Введите Фамилию';
            $errors['errors']['lv'][] = 'Ievadiet Uzvārdu';
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)  OR  trim($email) == '' ) {
            $errors['errors']['ru'][] = 'Ваш Емейл неверен';
            $errors['errors']['lv'][] = 'Jūsu e-pasts ir nepareizs';
        }

        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $data = ['secret'   => 'Captcha Secret Key Here',
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
            $errors['errors']['lv'][] = 'Jūs neesat izturējis ReCaptcha verifikāciju';
            $errors['errors']['ru'][] = 'Вы не прошли верификацию ReCaptcha';
        }
            
        if ($errors) { $errors['success'] = 'error';}
        return $errors;
    }

    public function sendMail( $name, $surname, $msg, $email, $phone ) 
    {
        //Create an instance; passing `true` enables exceptions
       $mail = new PHPMailer(true);
       try {
           //Server settings
           $mail->isSMTP();                                           
           $mail->Host       = ' smtp.gmail.com ';   
           $mail->SMTPAuth   = true; 
           $mail->Username   = 'msgrupa.lv@gmail.com';
           $mail->Password   = 'SMTP Secret Key Here';
           $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
           $mail->Port       = 465; 
           $mail->SMTPSecure = "ssl";
           $mail->CharSet = "UTF-8";

           //Recipients
           $mail->setFrom('info@msgrupa.lv', 'MsGrupa');
           $mail->addAddress('leonid.gurockin@gmail.com', 'MsGrupa');
           $mail->addAddress('msgrupa.lv@gmail.com', 'MsGrupa');
           $mail->addReplyTo($email, 'Client: '.$name.' '.$surname);
 
       
           //Content
           $mail->isHTML(true); 
           $mail->Subject = 'Новое сообщение от MsGrupa.lv';

           $message = "
           <html> 
     
            

         
           <body color=\"#999\"> 
                <hr>
               <h4> НОВОЕ СООБЩЕНИЕ ОТ MSGRUPA.LV: </h4>
               <hr>
               <table>
                    <tr style='background-color: #dddddd;'>
                        <th style='border: 1px solid #dddddd; padding: 8px;'>E-mail</th>
                        <th style='border: 1px solid #dddddd; padding: 8px;'>ИМЯ</th>
                        <th style='border: 1px solid #dddddd; padding: 8px;'>ФАМИЛИЯ</th>
                        <th style='border: 1px solid #dddddd; padding: 8px;'>ТЕЛЕФОНА</th>
                    </tr>
                    <tr>
                        <td style='border: 1px solid #dddddd; padding: 8px;'>".$email."</td>
                        <td style='border: 1px solid #dddddd; padding: 8px;'>".$name."</td>
                        <td style='border: 1px solid #dddddd; padding: 8px;'>".$surname."</td>
                        <td style='border: 1px solid #dddddd; padding: 8px;'>".$phone."</td>
                    </tr>
                    <tr>
                        <th colspan='4' style='text-align: center; border: 1px solid #dddddd; background-color: #dddddd;'>СООБЩЕНИЕ</th>
                    </tr>
                    <tr>
                        <td colspan='4' style='border: 1px solid #dddddd; padding: 8px;'>".$msg."</td>
                    </tr>
                </table>


           </body> 
           </html>"; 

           $mail->Body    = $message;
           $mail->AltBody = $message;
           $mail->send();
           $errors = false;

        $status['errors'] = false;
        $status['success'] = 200;

        return $status;

       } catch (Exception $e) {
        return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
       }
    }


}