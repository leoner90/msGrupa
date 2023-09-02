<?php
require_once PROJECT_ROOT_PATH . "/Models/Database.php";
class GalleryModel extends Database
{
    public function getGalleryImages($limit)
    {
        // return $this->select("SELECT * FROM galleryimages  LIMIT ?", ["i", $limit]);
        return $this->select("SELECT * FROM galleryimages") ;
    }
}