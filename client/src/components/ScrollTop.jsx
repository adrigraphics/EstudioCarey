import React from 'react'
import {MdArrowDropUp} from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ScrollTop = () => {
  return (
    <div>
    <a href="#hero">
        <button
            data-aos="fade-up"
            className='btn btn-outline btn-circle btn-md text-4xl border-2 m-3 btn-dark flex fixed bg-white z-50 bottom-2 right-2'>
            <MdArrowDropUp />
        </button>
    </a>
</div>
  )
}

export default ScrollTop
