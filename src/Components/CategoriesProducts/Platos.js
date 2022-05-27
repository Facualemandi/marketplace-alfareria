import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Platos = ({name, image, price, seeProduct, el}) => {
  const [lookProduct, setLookProduct] = useState(false);

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
           <img src={image} alt={name} className='img_producs_ui'/>

           <section className="section_description_product">
               <p>{name}</p>
               <span>${price}</span>
           </section>

           <NavLink to={`/description/${name}`}>
                  {lookProduct &&  <p className="more_product" onClick={() => seeProduct(el)}> Ver más</p>}
           </NavLink>


      </section>
       
    </>
  );
};

export default Platos;
