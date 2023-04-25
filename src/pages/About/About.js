import React from 'react'
import { NavBar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { HeroCentered } from './HeroCentered'
import { Slider } from './Slider'
import { Album } from './Album'

export const About = () => {
  return (
    <>
      <NavBar />
      <HeroCentered />
      <Slider />
      <Album />
      <Footer />
    </>
  )
}
