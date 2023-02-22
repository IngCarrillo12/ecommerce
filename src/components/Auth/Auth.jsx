import React from 'react'
import './auth.css'
export const Auth = () => {
    const closeModal = ()=>{
        const modal =  document.querySelector('.modal')
        modal.style.visibility = 'hidden'
        modal.style.opacity = '0'
    }
  return (
    <div id="demo-modal" class="modal">	
    <div className='container-auth'>
        <div className='contenedor-Auth'> 
    <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
        <svg onClick={()=>closeModal()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon-close">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

            <form className="form-auth">
                <label for="chk" aria-hidden="true">Log in</label>
                <input className="input" type="email" name="email" placeholder="Email" required="" />
                <input className="input" type="password" name="pswd" placeholder="Password" required="" />
                <button>Log in</button>
            </form>
        </div>
    <div className="register">
            <form className="form-auth form-register">
                <label for="chk" aria-hidden="true">Register</label>
                <input className="input" type="text" name="txt" placeholder="Username" required=""/>
                <input className="input" type="email" name="email" placeholder="Email" required=""/>
                <input className="input" type="password" name="pswd" placeholder="Password" required=""/>
                <button>Register</button>
            </form>
        </div>
        </div>
        </div>
</div>


  )
}
