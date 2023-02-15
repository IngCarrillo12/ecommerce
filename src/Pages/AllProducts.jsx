import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Producto} from '../components/CardCategoryProducts/Producto'
import { Waveform } from '@uiball/loaders'

export const AllProducts = () => {
    const { listProducts, loading } = useSelector(state => state.productsState);
    const dispatch = useDispatch()
  return (
        <>
            {
                loading?(
                    <div style={{display:"flex", justifyContent:'center', alignItems:'center', height:'500px' , fontSize:'200px'}}>
                        <Waveform 
                        size={40}
                        lineWeight={3.5}
                        speed={1} 
                        color="black" 
                        />
                </div>
                ):(
                    <div className='container'>
                        <div className='grid-cards'>
                    {
                    listProducts.map(product => <Producto key={product.id} id={product.id} name={product.title} cover={product.images[0]} price={product.price}  />)
                    }
                        </div>
                    </div>
                )
            }
     </>
  )
}
