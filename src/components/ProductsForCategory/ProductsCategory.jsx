import React from 'react'
import { Producto } from '../CardCategoryProducts/Producto'
import './productsCategory.css'

export const ProductsCategory = ({products, category}) => {
    const productsForCategory = products.filter(item =>item.category.name === category)
  return (
    <section className='container-productForCategory'>
        <h2 className='productForCategory-title'>{category}({productsForCategory.length})</h2>
    <div className="grid-cards">
     {
      productsForCategory.map(product => (
        <Producto key={product.id} id={product.id} name={product.title} cover={product.images[0]} price={product.price}  />
      ))
     }
  </div>
  </section>
  )
}
