import React from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import salon from '../assets/img/salon.jpg'
import foto from '../assets/img/foto.jpg'

const Slider = () => {
  return (
    <div className="carousel bg-base-200 h-[400px] md:h-[600px] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={salon} className="relative object-cover overflow-hidden w-full" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle drop-shadow-xl border border-black">❮</a> 
      <a href="#slide2" className="btn btn-circle drop-shadow-xl border border-black">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={foto} className="relative object-cover overflow-hidden w-full" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle drop-shadow-xl border border-black">❮</a> 
      <a href="#slide1" className="btn btn-circle drop-shadow-xl border border-black">❯</a>
    </div>
  </div>
</div>
  )
}

export default Slider