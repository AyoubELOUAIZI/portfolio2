import React from 'react'
import { NavBar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { ContactForm } from './ContactForm'
import { ContactHero } from './ContactHero'
import { Slider } from './Slider'

export const Contact = () => {
    return (
        <>
            <NavBar />
            <Slider/>
            <ContactHero/>
            <ContactForm/>
            <Footer />
        </>
    )
}
