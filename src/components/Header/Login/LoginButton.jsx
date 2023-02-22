
import React from 'react'


export default function LoginButton() {

    const openModal = ()=>{
    const modal =  document.querySelector('.modal')
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
    }
  return (
    <button onClick={()=>openModal()} className='btn-login' >Login</button>
  )
}
