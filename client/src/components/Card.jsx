import React from 'react'
import { Link } from "react-router-dom"
import { useAtom } from 'jotai';
import { productsAtom, selectedProductAtom } from '../store';



const Card = ({ item }) => {
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);


  return (
    <div>
      
      <Link className='link no-underline' to={`/producto/${item.id}`} onClick={ ()=> setSelectedProduct(item)}>
        <div className="tarjeta h-[350px] w-full ">
          <div className="image h-[250px] overflow-hidden rounded-2xl">
            {item.isNew && <span>Nuevo!</span>}
            <img className="mainImg hover:scale-110 hover:transition hover:ease-in-out w-full 
                    h-full" src={item.variants[0].imgs[0]} alt="" /> 
                    {/*   item.variants[0].imgs[0]   */}
            
          </div>
          <h2 className='text-xl'>{item.title}</h2>
          <div className="prices text-sm flex gap-[20px]">
            <h3 className='line-through text-slate-400'>{item.oldPrice && '$' + item.oldPrice}</h3>
            <h3 className='font-bold'>{item.variantName && 'Desde '}${item.price} MXN</h3>
          </div>
        </div>
      </Link>
      <button className='w-full button-blk py-1 mb-10'>Agregar al carrito</button>
    </div>

  )
}

export default Card