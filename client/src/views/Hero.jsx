import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';
import ScrollDown from '../components/ScrollDown';

export default function Hero() {
  return (
    <div id="hero">
      <div className="flex justify-center w-full bg-cover bg-center h-[700px] xl:h-[800px] bg-[url('./assets/img/herobg.png')]">
        <div className="h-[700px] xl:h-[800px] absolute hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="dm-serif sm:text-8xl text-6xl mb-12 font-bold font-dm animate__animated animate__fadeInDown animate__slow">
              Fotografía<br/>e Imagen
            </h1>
            <div className="flex sm:flex-row flex-col justify-evenly ">
              <a href="#citas"><button className="btn btn-outline btn-lg border-2 m-3 btn-dark rounded-full w-[250px]">Haz una cita</button></a>

              <div className='item'>
                <Link to="/tienda"><button className="btn btn-outline btn-lg border-2 m-3 btn-dark rounded-full w-[250px]">Visita la tienda</button></Link>
              </div>
            </div>
            <ScrollDown />
          </div>
        </div>
        
        <div id="nos" className="xl:top-[630px] top-[530px] max-[767px]:top-[630px] custom-shape-divider-bottom-1689195475">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      
    </div>
  )
}
