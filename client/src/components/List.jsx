import React from 'react'
import Card from './Card'
import { useAtom } from 'jotai';
import { productsAtom, selectedProductAtom } from '../store';



const List = () => {

  const [products, setProducts] = useAtom(productsAtom);
  

  return (
    <div className='list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-3 w-full'>
        {products?.map(item=>(
            <Card item={item} key={item.id} />
        ))}
        
    </div>
  )
}

export default List