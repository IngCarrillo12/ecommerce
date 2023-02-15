import React from 'react'
import { useSelector } from 'react-redux'
import { Producto } from '../CardCategoryProducts/Producto'
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

export const RelatedProducts = ({ category, idProduct }) => {
    const { listProducts } = useSelector(state => state.productsState)
    const relatedProducts = listProducts.filter(product =>((product.category.name === category) && (product.id !== idProduct)))
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='relatedProduts'>
        <h3 className='relatedProduts-title'>Productos Relacionados</h3>
     <Carousel responsive={responsive}>
            {
                relatedProducts.map(product => <Producto id={product.id} cover={product.images[0]} name={product.title} price={product.price} key={product.id} />)
            }
            </Carousel>

    </section>
  )
}
