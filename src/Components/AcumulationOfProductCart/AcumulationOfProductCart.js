import React from "react";
import "./AcumulationOfProductCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const AcumulationOfProductCart = ({
  deleteObj,
  productValue,
  name,
  image,
  price,
  count,
  id,

}) => {
  
  return (
    <>
    
      <section className="container_acumulation_procut">
        <img src={image} className="img_acumulation_product" />

        <section className="section_acumularion_product">
          <p>{name}</p>
          <span>${price}</span>
        </section>

        <p className="count_acumulation">x{count}</p>

        <RiDeleteBin6Line onClick={() => deleteObj(id)} className="icon_delete_cart" />
      </section>
    </>
  );
};

export default AcumulationOfProductCart;
