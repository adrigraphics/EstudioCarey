import React from 'react'
import {Link} from "react-router-dom"


const Card = ({item}) => {
  return (
    <Link className='link no-underline' to={`/producto/${item.id}`}>
      <div className="tarjeta w-[200px] md:w-[250px] ">
        <div className="image h-[200px] md:h-[250px]">
          {item.isNew && <span>Nuevo!</span>}
          <img className="mainImg" src={item.img} alt="" />
          <img className="secondImg" src={item.img2} alt="" />
        </div>
        <h2 className='text-xl'>{item.title}</h2>
        <div className="prices flex gap-[20px]">
          <h3 className='line-through text-slate-400'>${item.oldPrice}</h3>
          <h3 className='font-bold'>${item.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card