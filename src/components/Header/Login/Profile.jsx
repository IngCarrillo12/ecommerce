import React from 'react'
import { LogoutButton } from './LogoutButton'
import { MenuProfile } from './MenuProfile'

export const Profile = ({user, OpenMenuProfile, setOpenMenuProfile}) => {
  return (
    <>
      <div className='profile' onClick={()=>setOpenMenuProfile(!OpenMenuProfile)}>
        <img className='profile-picture' src={user.picture} alt={user.name} />
      </div>
      {
        
      OpenMenuProfile &&(
      
          <div className='openProfile'>
              <MenuProfile picture={user.picture} name={user.name} email={user.email}/>
            <LogoutButton/>
          </div>
          )
}
      </>
  );
}
