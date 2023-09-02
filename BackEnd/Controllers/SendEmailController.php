<?php
class SendEmailController extends BaseController
{
    public function SendEmail()
    {
        $strErrorDesc = '';
        $SendEmailModel = new SendEmailModel();
        $name = htmlspecialchars($_POST['name']);
        $surname = htmlspecialchars($_POST['surname']);
        $msg = htmlspecialchars($_POST['msg']);
        $token = $_POST['token'];
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['userPhone']);
        $errors = $SendEmailModel->sendMailValidation($name, $surname, $msg, $email, $phone, $token);
        
        if (!$errors) { 
            $send = $SendEmailModel->sendMail($name, $surname, $msg, $email, $phone);
            if($send){
                $this->sendOutput(
                    json_encode($send),
                    array('Content-Type: application/json', 'HTTP/1.1 200 OK')
                );
            }
          

        } else {

            $this->sendOutput(
                json_encode($errors),
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );


 
        }
    }
}

 