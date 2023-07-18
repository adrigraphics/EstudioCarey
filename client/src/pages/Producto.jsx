import React from 'react'
import { useState } from 'react'
import '../index.css'
import { MdShoppingCart } from 'react-icons/md'


const Producto = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className='producto nunito'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className='dm-serif'>Titulo</h1>
        <span className='price'>$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Alias a rem corrupti laudantium accusantium, quidem facilis
          aspernatur explicabo suscipit maxime nostrum praesentium beatae
          rerum vitae temporibus accusamus ipsum labore veritatis.
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
          <button className='add'>
            <MdShoppingCart /> AÑADIR AL CARRITO
          </button>
      </div>
    </div>
  )
}

export default Producto