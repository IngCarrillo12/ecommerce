import React from 'react'
import { CategoryHeader } from './CategoryHeader'
import { Producto } from './Producto'
import './CategoryProducts.css'

export const CardForCategory = ({products, category}) => {
const productsForCategory = products.filter(item =>item.category.name === category)
  return <>
  <CategoryHeader category={category} productsLength={productsForCategory.length} />
  <div className="grid-cards">
     {
      productsForCategory.filter((item, idx) => idx < 8).map(product => (
        <Producto key={product.id} id={product.id} name={product.title} cover={product.images[0]} price={product.price}  />
      ))
     }
  </div>
</>
  
}
