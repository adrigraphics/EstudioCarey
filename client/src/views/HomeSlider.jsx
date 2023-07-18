import React from 'react'
import salon from '../assets/img/salon.jpg'
import foto from '../assets/img/foto.jpg'

export default function Slider() {
  return (
    <div className="carousel bg-base-200 h-screen w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={salon} className="relative object-cover overflow-hidden w-full" />
    <div className="bg-white text-black rounded-full py-3 text-2xl md:text-4xl bottom-10 left-5 right-5 md:left-24 md:right-24 text-center drop-shadow-xl border-2 border-black z-30 absolute">
      Aquí enchulamos tu cabello
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle drop-shadow-xl border border-black">❮</a> 
      <a href="#slide2" className="btn btn-circle drop-shadow-xl border border-black">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={foto} className="relative object-cover overflow-hidden w-full" />
    <div className="bg-white text-black rounded-full py-3 text-2xl md:text-4xl bottom-10 left-5 right-5 md:left-24 md:right-24 text-center drop-shadow-xl border-2 border-black z-30 absolute">
      Y aquí te tomamos fotos
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle drop-shadow-xl border border-black">❮</a> 
      <a href="#slide1" className="btn btn-circle drop-shadow-xl border border-black">❯</a>
    </div>
  </div>
</div>

  )
}
