import React from 'react'
import { Link } from 'react-router-dom'
export const CategoryHeader = ({ category, productsLength }) => {
  const location = window.location.pathname
  return (
    <div className="categoria-header">
      {
        location === `/categoria/${category}`?(
          <>
          <span>{ category }({productsLength})</span>
        </>     
        ):(   
          <>
            <span >{ category }</span>
            <div className="link-arrow" >
          <Link className='link' to={`/categoria/${category}`}> Ver todo </Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
        </>
        )
      }
        
  </div>
  )
}
