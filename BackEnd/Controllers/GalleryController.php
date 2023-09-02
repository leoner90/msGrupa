<?php
class GalleryController extends BaseController
{
    public function getGalleryImages()
    {
        $strErrorDesc = false;
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper($requestMethod) == 'POST') {
             $userModel = new GalleryModel();
                $intLimit = 10;
                $arrUsers = $userModel->getGalleryImages($intLimit);
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
        // no err send output
        if (!$strErrorDesc) {
            $this->sendOutput(
                json_encode($arrUsers),
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }
}