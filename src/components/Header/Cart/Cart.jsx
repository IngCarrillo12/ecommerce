import React from 'react'
import { useSelector } from 'react-redux'
import { OpenCar as CarritoAbierto } from './OpenCar'

export const Cart = ({OpenCart, setOpenCart}) => {
    const quantity = useSelector((state) => state.cart.totalQuantity)
    const cartItems = useSelector((state) => state.cart.itemsList)
    let total = 0
    const itemsLists = useSelector((state) => state.cart.itemsList)
    itemsLists.forEach((item) => {
      total += item.totalPrice
    })
    return (
        <>
    <div className='cart' onClick={()=>setOpenCart(!OpenCart)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cart-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <span className='cart-amount'>{quantity}</span>
    </div>
     {
        OpenCart && (
            <div className='openCar'>
                <div className='openCar-header'>
                <h1 className='openCar-title'>Cart</h1>
                <span className='quanty-products'>Quanty Products: {cartItems.length}</span>
                </div>
                <div className='openCar-list'>
                {cartItems.map(item=>(
                    <CarritoAbierto id={item.id} image={item.image} title={item.title} price={item.price} totalPrice={item.totalPrice} quantity={item.quantity}  />
                ))}
                </div>
                <p className='total-pay' >Total: ${total}</p>
                <button className='button-pay'>Pagar</button>
                </div>
            
           
        )
     }
     </>
    )
}
