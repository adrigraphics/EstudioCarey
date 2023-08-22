import React from 'react'
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ScrollTop = () => {
  return (
    <div className='inline-flex justify-center animate__animated animate__shakeY animate__slow animate__delay-2s'>
    <a href="#nos">
        <button
            className='btn btn-outline btn-circle btn-md text-4xl border-2 mt-5 btn-dark z-50 '>
            <MdArrowDropDown />
        </button>
    </a>
</div>
  )
}

export default ScrollTop
