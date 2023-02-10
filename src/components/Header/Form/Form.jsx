import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Form = () => {
    // const navigate = useNavigate()
    // const onSearchSubmit = (e)=>{
    // e.preventDefault()
    //   if(valueSearch!=='')(navigate(`/search`,{
    //   state: valueSearch
    // }),onResetForm())
    
    return (
    <form  className="form">
            <input 
            className="form-input" 
            type="text" 
            placeholder="Que deseas Buscas?"
            name="valueSearch" 
            // value={valueSearch}
            // onChange={onInputChange}
            id=""
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="form-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg> 
            </form>
)
    }
