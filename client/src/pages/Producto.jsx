import React from 'react'
import { useState } from 'react'
import '../index.css'
import { MdShoppingCart } from 'react-icons/md'
import FeaturedProducts from '../components/FeaturedProducts'
import { useAtom } from 'jotai';
import { selectedProductAtom } from '../store';


const Producto = () => {
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);
  const [selectedImg, setSelectedImg] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [variantButton, setVariantButton] = useState(0)

  const images = [
    "https://images.pexels.com/photos/17077796/pexels-photo-17077796/free-photo-of-punto-de-referencia-edificio-pared-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className='producto nunito flex flex-col justify-center items-center py-[150px] animate__animated animate__fadeIn'>
      <div className='mx-5 xl:mx-0 flex flex-col justify-center gap-8 md:flex-row max-w-[1000px] '>
        <div className="left">
          {selectedProduct.variants[0].imgs[1] &&
            <div className="images w-1/2">
              <img className='rounded-2xl' src={selectedProduct.variants[0].imgs[0]} alt="" onClick={e => setSelectedImg(0)} />
              <img className='rounded-2xl' src={selectedProduct.variants[0].imgs[1]} alt="" onClick={e => setSelectedImg(1)} />
            </div>
          }
          <div className="mainImg rounded-2xl overflow-hidden ">
            <img className="h-full" src={selectedProduct.variants[selectedVariant].imgs[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <div className=' flex flex-col gap-5'>
            <h1 className='dm-serif'>{selectedProduct.title} <span className='text-gray-400'>{selectedProduct.variants[selectedVariant].ml}</span></h1>
            <span className='price'>${selectedProduct.variants[selectedVariant].price} MXN</span>
            <p>
              {selectedProduct.shortdesc}
            </p>
          </div>

          {selectedProduct.variantName &&
            <div className='flex flex-col gap-5'>
              {selectedProduct.variantName}
              <div className='flex gap-5 flex-wrap'>
                {selectedProduct.variants.map((item, index) => (
                  <div className="btn" key={index} onClick={e => setSelectedVariant(index)}>{item.ml}</div>
                ))}
              </div>
            </div>
          }
          <button className='add py-2'>
            <a href={selectedProduct.variants[selectedVariant].buy} className='flex flex-row items-center gap-1'><MdShoppingCart /> COMPRAR</a>
          </button>

          {/* {selectedProduct.variantName &&
            <details className="dropdown mb-32">
              <summary className="m-1 btn">{selectedProduct.variantName}</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a onClick={e => setSelectedVariant(0)}>{selectedProduct.variants[0].ml}</a></li>
                <li><a onClick={e => setSelectedVariant(1)}>{selectedProduct.variants[1].ml}</a></li>
              </ul>
            </details>
          } */}

          {/* <div className="quantity">
            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div> */}
          
          {/* <button className='add py-2'>
            <MdShoppingCart /> AÑADIR AL CARRITO
          </button> */}
        </div>
      </div>
      {selectedProduct.description &&
        <div className='description px-5 max-w-[1000px]'>
          <h2 className='text-2xl font-bold dm-serif'>Descripción</h2>
          <p>
            {selectedProduct.description}
          </p>
        </div>}
      {/* <div>
        <FeaturedProducts type="productos relacionados" />
      </div> */}


    </div>
  )
}

export default Producto