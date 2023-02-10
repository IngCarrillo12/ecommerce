import React from 'react'

export const MenuProfile = ({picture, name, email}) => {
  return (
    <>
         <div className='openProfile-picture'>
            <img className='picture' src={picture} alt={name} />
            <h3>{name}</h3>
            </div>
            <span>{email}</span>
    </>
  )
}
