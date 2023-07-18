import React from 'react'
import nosotrxs from '../assets/img/nosotrxs.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ScrollTop from '../components/ScrollTop';
// ..
AOS.init();

export default function Nosotrxs() {
  return (
    <div id="nosotrxs" className="hero pt-[100px] bg-white my-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="align-center"
          src={nosotrxs}
          alt=""
        />
        <div>
          <h1 className="dm-serif text-5xl font-bold">Nosotrxs</h1>
          <p className="py-6 text-xl max-w-sm">Hola! Somos Diana Cano y Adri Reyes, nos apasiona crear y decidimos consolidarlo en un espacio físico que nombramos Estudio Carey: una mezcla de peluquería / estudio de fotografía para la comunidad.
            <br />
            Bienvenides ♥</p>
        </div>
      </div>
        {/* //////SCROLL TO TOP BUTTON//////// */}
        <ScrollTop />

    </div>
  )
}
