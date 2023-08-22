import React from 'react'
import hair from '../assets/img/hair.jpg'

const TiendaBanner = () => {
    return (
        <div className='flex justify-center '>
            <div className='mx-5 xl:mx-0 flex flex-col md:flex-row h-[350px] w-[800px] lg:w-[1200px] gap-2'>
                <div className='rounded-3xl overflow-hidden md:w-1/3 h-1/3 text-6xl dm-serif md:h-full bg-white md:bg-black md:text-white text-black flex justify-center items-center'>
                    Tienda
                </div>
                <div className='rounded-3xl overflow-hidden md:w-2/3 h-2/3 md:h-full items-start flex'>
                    <img src={hair} alt="" />
                </div>
            </div>
        </div>

    )
}

export default TiendaBanner