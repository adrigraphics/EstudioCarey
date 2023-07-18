import React from 'react'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'
import Categorias from '../components/Categorias'


const Tienda = () => {

  return (
    <div className='nunito'>
      <Slider />
      <FeaturedProducts type="featured"/>
      <Categorias />
      <FeaturedProducts type="trending"/>
      
    </div>
  )
}

export default Tienda