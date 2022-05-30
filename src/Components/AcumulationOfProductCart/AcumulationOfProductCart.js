import "./AcumulationOfProductCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";

const AcumulationOfProductCart = ({
  deleteObj,
  name,
  image,
  price,
  id,
  amount,
  el,
  productInTheCart,
}) => {
  const totalValue = amount * price;


  

  const newAmount = (el, id) => {
     el.amount = el.amount + 1
  }
 

  return (
    <>
      <section className="container_acumulation_procut">
        <img src={image} alt={name} className="img_acumulation_product" />

        <section className="section_acumularion_product">
          <p>{name}</p>
          <span>${price}</span>
          <p className="total_acumulation">Total: ${totalValue}.00</p>
        </section>

        <section className="section_acumulation_cart">
          <p className="count_acumulation">x{amount}</p>

          <section className="acumulation_add_minus_cart">
            <button>-</button>

            <button onClick={() => newAmount(el,id)}>+</button>
          </section>
        </section>

        <RiDeleteBin6Line
          onClick={() => deleteObj(id)}
          className="icon_delete_cart"
        />
      </section>
    </>
  );
};

export default AcumulationOfProductCart;
