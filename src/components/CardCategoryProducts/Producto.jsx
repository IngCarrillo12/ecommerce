import React from 'react'
import { Link } from 'react-router-dom'

export const Producto = ({id,name,price,cover}) => {
  
  return (
    <div className="cards-card" id={id}>
    <div className='contenedor-img'>
          <img className="card-img" src={cover} alt={name} />
          </div>
          <p className="card-title">{name}</p>
          <span className="card-precio">$ {price}</span>
          {/* <a  href={`/producto/${title}`} className="btn-card">Ver Producto</a> */}
          <Link to={`/product/${id}`} className='view-product' >Ver Producto</Link>
      </div>
  )
}
