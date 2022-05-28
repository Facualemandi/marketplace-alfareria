import React from 'react'
import './OpenMenuLateral.css'

const OpenMenuLateral = ({openMenu}) => {
  return (
      <> 
         {openMenu && <section className='scontainer_Menu_lateral'>
           <ul className='ul_menu_lateral'>
             <li>Facundo </li>
             <li>Alemandi</li>
             <li>Alemandi</li>
             <li>Alemandi</li>
           </ul>
         </section>}
        
      </>

  )
}

export default OpenMenuLateral