import React, { useState } from 'react'
import { Slogan } from './Slogan/Slogan'
import { Form } from './Form/Form'
import { Outlet} from 'react-router-dom'
import LoginButton from './Login/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import './Header.css'
import { Profile } from './Login/Profile'
import { Cart } from './Cart/Cart'

export const Navigation = () => {
  const {isAuthenticated, user} = useAuth0()
  const [OpenCart, setOpenCart] = useState(false)
  const [OpenMenuProfile, setOpenMenuProfile] = useState(false)
  return (
    <>
    <header className="header">
        <Slogan/>
        <div className="header-contenedor">
            <Form/>
            <Cart OpenCart={OpenCart} setOpenCart={setOpenCart}/>
            {
              isAuthenticated?(
                <Profile user={user} OpenMenuProfile={OpenMenuProfile} setOpenMenuProfile={setOpenMenuProfile}/>
              ):(
                <LoginButton/>
              )
            }
        </div>
    </header>
    <Outlet/>
    </>
  )
}
