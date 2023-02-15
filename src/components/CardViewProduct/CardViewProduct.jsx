import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/CartSlice'
import './StyleCardProduct.css'

export const CardViewProduct = ({id, image, title, price, description}) => {
    const dispatch = useDispatch()

    const addCart = ()=>{
        dispatch(addToCart({id, price, title, image}))
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
