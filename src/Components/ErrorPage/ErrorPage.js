import React from 'react'
import { BiErrorAlt } from 'react-icons/bi';
import './ErrorPage.css'



const ErrorPage = () => {
  return (
       <>
           <section className='error'>
             <BiErrorAlt className='icon_error'/>
               <p>Error 404</p>
           </section>
       </>
  )
}

export default ErrorPage