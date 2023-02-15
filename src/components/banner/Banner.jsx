import React from 'react'
import { Link } from 'react-router-dom'
import "./banner.css"
export const Banner = () => {
  return (
    <section className="banner">
    <div className="banner-info">
        <h4 className="info-title">Mejor Calidad Precio</h4>
        <p className="info-description">Encuentra Productos de la mejor calidad-precio Del Pais</p>
        <Link className="btn btn-banner" to={"/products"}>Ver Productos</Link>
    </div>
</section>
  )
}
