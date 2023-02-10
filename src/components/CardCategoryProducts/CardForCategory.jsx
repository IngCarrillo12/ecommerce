import React from 'react'
import { CategoryHeader } from './CategoryHeader'
import { Producto } from './Producto'
import './CategoryProducts.css'

export const CardForCategory = ({products, category}) => {
const productsForCategory = products.filter(item =>item.category === category)
  return <>
  <CategoryHeader category={category} productsLength={productsForCategory.length} />
  <div className="categoria-cards">
     {
      productsForCategory.filter((item, idx) => idx < 8).map(product => (
        <Producto key={product.id} id={product.id} name={product.title} cover={product.image} price={product.price}  />
      ))
     }
  </div>
</>
  
}
