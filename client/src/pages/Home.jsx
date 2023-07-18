import React from 'react'
import Hero from '../views/Hero'
import Nosotrxs from '../views/Nosotrxs'
import HomeSlider from '../views/HomeSlider'
import Citas from '../views/Citas'
import FAQ from '../views/FAQ'
import 'animate.css';

export default function Home() {
  return (
    <div className="nunito animate__animated animate__fadeIn animate__slower">
        <Hero />
        <Nosotrxs />
        <HomeSlider />
        <Citas />
        <FAQ />
    </div>
  )
}
