<?php
$clientName = $_SERVER['HTTP_ORIGIN'];
// $clientNameAllowed = array('http://localhost:3000', 'http://www.localhost:3000', 'https://localhost:3000', 'https://www.localhost:3000');
$clientNameAllowed = array('http://msgrupa.lv', 'http://www.msgrupa.lv', 'https://msgrupa.lv', 'https://www.msgrupa.lv');

foreach ($clientNameAllowed as $name) {
    if($name === $_SERVER['HTTP_ORIGIN']) {
        header("Access-Control-Allow-Origin: $clientName");
        break;
    }
}

//Header
// header("Access-Control-Allow-Origin:  http://localhost:3000");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
define("PROJECT_ROOT_PATH", __DIR__ . "/");

// include main configuration file 
require_once PROJECT_ROOT_PATH . "/config.php";
// include the base controller file 
require_once PROJECT_ROOT_PATH . "/Controllers/BaseController.php";

//Models
require_once PROJECT_ROOT_PATH . "/Models/GalleryModel.php";
require_once PROJECT_ROOT_PATH . "/Models/SendEmailModel.php";

//controllers
require PROJECT_ROOT_PATH . "/Controllers/GalleryController.php";
require PROJECT_ROOT_PATH . "/Controllers/SendEmailController.php";

//url parsing to get controller name
// $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// $uri = explode( '/', $uri );

//TODO -> unsafe , unreliable
$uri = parse_url($_SERVER['QUERY_STRING'], PHP_URL_PATH);

//$uri[2] -> controller name
switch ($uri) {
    case 'gallery':
        $objFeedController = new GalleryController();
        $objFeedController->{'getGalleryImages'}();
        break;
    case 'mail':
        $objFeedController = new SendEmailController();
        $objFeedController->{'SendEmail'}();
        break;
    default:
        header("HTTP/1.1 404 Not Found");
        exit();
}
