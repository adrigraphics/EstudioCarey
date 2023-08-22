import React from 'react'
import '../index.css';
import Card from './Card';



const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shampoo",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shampoo",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shampoo",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shampoo",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    
  ]
  return (
    <div className='w-full flex justify-center'>
      <div className="featuredProducts px-5 xl:px-0 py-12 w-[800px] lg:w-[1200px]">
        <div className="top mb-[50px]">
          <h1 className="text-3xl font-bold">{type}</h1>
        </div>
        <div className="bottom grid grid-cols-2 md:grid-cols-4 justify-center gap-5 w-full">
          {data.map(item => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts