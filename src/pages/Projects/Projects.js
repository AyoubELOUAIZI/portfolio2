import React from 'react'
import { NavBar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { Card } from '../../components/CardHover1/Card'
import { Card2 } from '../../components/CardHover2/Card2'
import { Gallary } from '../../components/Gallary/Gallary'
import { FinalProject } from './FinalProject/FinalProject'

export const Projects = () => {
    return (
        <>
            <NavBar />
            <Card/>
            <Card2/>
            <Gallary/>
            <FinalProject/>
            <Footer />
        </>
    )
}
