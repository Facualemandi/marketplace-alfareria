import React from "react";
import "./ProductInTheCart.css";

const ProductInTheCart = ({ valueProduct, count }) => {
   
  const totalValue = (valueProduct[2] * count)

  return (
    <>
      <section className="contaianer_product_cart">
        <img
          className="img_product_cart"
          alt={valueProduct[1]}
          src={valueProduct[4]}
        />

        <section className="description_product_cart">
          <p>{valueProduct[1]}</p>
          <span>${valueProduct[2]}</span>
          <p> total: ${totalValue} </p>
        </section>

          <span className="count_product_cart">x{count}</span>
      </section>
    </>
  );
};

export default ProductInTheCart;
