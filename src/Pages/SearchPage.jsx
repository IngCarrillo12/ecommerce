import React from 'react'
import {Producto} from '../components/CategoryProducts/Producto'
import { useLocation } from 'react-router-dom';
export const SearchPage = () => {
  const location = useLocation()
    const filteredProducts = AllProducts.filter(product =>(((product.title).toLowerCase()).includes((location.state).toLowerCase()))||(((product.category).toLowerCase()).includes((location.state).toLowerCase())))

    return (

     <div className='container-productos'>
   <section className="productos">
   <p className='p-search'>
        Se encontraron <span> {filteredProducts.length}</span>{' '}
        resultados:
      </p>
   <div className="categoria-cards">
    {
      filteredProducts.map(productos=><Producto key={productos.id} title={productos.title} image={(productos.images[0]||productos.images)} price={productos.price}  />)
  }
   </div>
  </section>
  </div>
 
  )
}
