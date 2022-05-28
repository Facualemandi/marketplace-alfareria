import React from 'react'
import './OpenMenuLateral.css'
import { BiHomeAlt } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { FcInfo } from "react-icons/fc";
import { IoMdContacts } from "react-icons/io";

const OpenMenuLateral = ({openMenu}) => {
  return (
      <> 
         {openMenu && <section className={`scontainer_Menu_lateral ${openMenu && 'is-active'}`}>
           <ul className='ul_menu_lateral'>
             <li> <BiHomeAlt className='icon_menu_lateral'/> Home </li>
             <li> <RiContactsLine className='icon_menu_lateral'/> Contacto</li>
             <li> <IoMdContacts className='icon_menu_lateral'/> Sobe nosotros</li>
             <li> <FcInfo className='icon_menu_lateral'/> Mas información</li>
           </ul>
         </section>}
        
      </>

  )
}

export default OpenMenuLateral