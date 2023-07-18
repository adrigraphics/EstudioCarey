import React from 'react'
import List from '../components/List'
import { useParams } from 'react-router-dom'

const Productos = () => {
  const catId = parseInt(useParams().id)

  return (
    <div className="productos nunito">
      <div className="left">
        <div className="filterItem">
          <h2>Categorías</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shampoo</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Acondicionador</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Reparador</label>
          </div>
        </div>
        <div className="filterItem">
        <h2>Marca</h2>
        <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">Amika</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value={5} />
            <label htmlFor="5">Paul Mitchell</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value={6} />
            <label htmlFor="6">Olaplex</label>
          </div>
        </div>
        <div className="filterItem">
        <h2>Tipo de cabello</h2>
        <div className="inputItem">
            <input type="checkbox" id="7" value={7} />
            <label htmlFor="7">Lacio</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="8" value={8} />
            <label htmlFor="8">Ondulado</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="9" value={9} />
            <label htmlFor="9">Rizado</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
        className="catImg"
        src="https://images.pexels.com/photos/17518151/pexels-photo-17518151/free-photo-of-ciudad-arte-punto-de-referencia-calle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="" />
        <List catId={catId}/>

      </div>
    </div>
  )
}

export default Productos