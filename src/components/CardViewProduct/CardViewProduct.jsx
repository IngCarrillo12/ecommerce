import React from 'react'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../../store/CartSlice'
import './StyleCardProduct.css'

export const CardViewProduct = ({category, id, image, title, price, description}) => {
    const dispatch = useDispatch()
    const addCart = ()=>{
        dispatch(cartSlice.addToCart({id, price, title, image}))
    }
  return (
    <div className='center'>
    <div className="card-producto">
      <div className="producto-img">
        <img src={image} alt={title} />
      </div>
      <div className="producto-info">
        <p className="producto-title">{title}</p>
        <span className="producto-precio">${price}</span>
        <p className="producto-description">{description} </p>
        <button className='add-cart' onClick={()=> addCart()}>Add Cart</button>
      </div>

    </div>
    </div>
    
  )
}
