import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const LogoutButton = () => {
    const {logout}=useAuth0()
  return (
    <button className='btn-logout' onClick={()=>logout()}>Logout</button>
  )
}
