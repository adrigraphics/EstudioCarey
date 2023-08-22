import React from 'react'
import List from '../components/List'
import { useParams } from 'react-router-dom'
import Filters from '../components/Filters'

const Productos = () => {
  const catId = parseInt(useParams().id)
  const [open, setOpen] = React.useState(false)

  return (
    <div className="productos w-full mt-12 flex justify-center">
      <div className="px-5 xl:px-0 w-[800px] lg:w-[1200px]">
        
        <List catId={catId} />

      </div>



    </div>
  )
}

export default Productos