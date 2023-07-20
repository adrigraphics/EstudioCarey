import React from 'react'
import List from '../components/List'
import { useParams } from 'react-router-dom'
import Filters from '../components/Filters'

const Productos = () => {
  const catId = parseInt(useParams().id)
  const [open, setOpen] = React.useState(false)

  return (
    <div className="productos gap-[10px] md:py-[30px] md:px-[50px] px-2 flex-col lg:flex-row nunito">
      <div className="left bg-white pb-3 top-[80px] md:top-[110px] z-40">
        <h1 onClick={()=>setOpen(!open)} className="text-2xl mb-2 cursor-pointer dm-serif bg-gray-200 text-center py-2">
          Filtrar por:
        </h1>
        {open && <Filters />}

      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/17518151/pexels-photo-17518151/free-photo-of-ciudad-arte-punto-de-referencia-calle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" />
        <List catId={catId} />

      </div>
    </div>
  )
}

export default Productos