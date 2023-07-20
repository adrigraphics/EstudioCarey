import React from 'react'
import '../index.css';
import Card from './Card';



const FeaturedProducts = ({type}) => {
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
    <div className="featuredProducts md:py-[30px] md:px-[50px] lg:px-[100px] xl:px-[150px] px-3">
        <div className="top mb-[50px] flex flex-wrap items-center justify-between">
            <h1 className="text-3xl font-bold">{type} products</h1>
            <p className='text-slate-400'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, modi officia numquam quaerat similique et unde. Animi possimus hic ex ut odio impedit, molestias iusto ratione eligendi maxime tempora facilis
            </p>
        </div>
        <div className="bottom flex flex-wrap justify-center gap-[50px]">
            {data.map(item=>(
              <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts