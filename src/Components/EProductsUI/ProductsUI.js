import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './ProductsUI.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { CgMoreVerticalAlt } from 'react-icons/cg';

const ProductsUI = ({ image, name, price,el, seeProduct, size}) => {

 
    const [lookProduct, setLookProduct] = useState(false)


    const detailsProduct = () => {
        if(!lookProduct){
            setLookProduct(true)
        }else{
            setLookProduct(false)
        }
    }


  return (
    <>
      <section className={`container_prodcts_ui ${lookProduct && 'is-active'}`} onClick={detailsProduct}>
        <section className="section_products_ui">
            <CgMoreVerticalAlt className="icon_more_products"/> 
           <img src={image} alt={name} className='img_producs_ui'/>
        </section>

           <section className="section_description_product">
               <p>{name}</p>
               <p>{size} </p>
               <span>${price}</span>
           </section>

           <NavLink to={`/description/${name}`} className='decoration'>
                    <p className="more_product" onClick={() => seeProduct(el)}> Ver más <BsArrowRightShort/>  </p>
           </NavLink>

      </section>
    </>
  );
};

export default ProductsUI;
