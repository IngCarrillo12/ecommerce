import React from 'react'
import { addToCart, removeFromCart} from '../../../store/CartSlice'
import { useDispatch } from 'react-redux'

export const OpenCar = ({id, image, title, price, quantity, totalPrice}) => {
  const dispatch = useDispatch()
  const incrementQuanty = ()=>{
    dispatch(addToCart({id, title, price}))
  }
  const decrementQuanty = ()=>{
    dispatch(removeFromCart(id))
  }
  const removeCart = () =>{
    dispatch(removeFromCart(id))
  }

  return (
        <div className='openCar-card'>
        <img src={image} alt={title} />
        <div className="openCar-card-info">
            <h3>{title}</h3>
            <p className='info-price'>unidad: {price}</p>
            <div className='card-info-buttons'>
                <button className='buttons-quanty' onClick={()=>incrementQuanty()}>+</button>
                <span className='quantity'>{quantity}</span>
                <button className='buttons-quanty'onClick={()=>decrementQuanty()} >-</button>
                <p className='info-totalPrice'>${totalPrice}</p>
            </div>
        </div>
        <svg onClick={()=>removeCart()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-delete">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

        </div>
  )
}
