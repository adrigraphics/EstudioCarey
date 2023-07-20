import React from 'react'
import { MdDelete } from 'react-icons/md'

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shampoo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis exercitationem, nesciunt delectus molestiae repellat recusandae magni voluptatibus harum incidunt quas! Asperiores similique sunt libero officia est voluptate ex quam.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shampoo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis exercitationem, nesciunt delectus molestiae repellat recusandae magni voluptatibus harum incidunt quas! Asperiores similique sunt libero officia est voluptate ex quam.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shampoo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis exercitationem, nesciunt delectus molestiae repellat recusandae magni voluptatibus harum incidunt quas! Asperiores similique sunt libero officia est voluptate ex quam.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ]
  return (
    <div className='cart nunito absolute right-[0px] top-[80px] md:top-[95px] z-50 shadow-md bg-white p-[20px]'>
      <h1>Carrito de compra</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0,50)}...</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <MdDelete className="delete"/>
        </div>
      ))}
      <div className="total ">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>AREA DE PAGO</button>
      <span className="reset">Vacia el carrito</span>
    </div>
  )
}

export default Cart