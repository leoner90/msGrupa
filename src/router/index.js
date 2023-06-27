import React from 'react'
import AboutSectionRu from '../views/AboutSection.jsx'
import SolarSectionRu from '../views/SolarSection.jsx'
import ElectroSectionRu from '../views/ElectroSection.jsx'
import GallerySectionRu from '../views/GallerySection.jsx'
import MapSectionRu from '../views/MapSection.jsx'
import ContactsRu from '../views/ContactsSection.jsx'
import FooterRu from '../components/footer/FooterRu.jsx'

const Router = () => {
        return (
            <div>
                <AboutSectionRu /> 
                <SolarSectionRu />
                <ElectroSectionRu />
                <MapSectionRu />
                <GallerySectionRu />
                <ContactsRu />
                <FooterRu />
            </div>
        )
 }
export { Router };