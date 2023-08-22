import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Productos from './Productos'
import Filters from '../components/Filters'
import TiendaBanner from '../components/TiendaBanner'


const Tienda = () => {

  return (
    <div className='nunito mt-[100px] animate__animated animate__fadeIn'>
      <TiendaBanner />
      {/* <FeaturedProducts type="productos populares"/> */}
      <Filters />
      <Productos />
      
    </div>
  )
}

export default Tienda