import React from "react";
import "./ProductInTheCart.css";

const ProductInTheCart = ({ valueProduct, count }) => {
  return (
    <>
      <section className="contaianer_product_cart">
        <img
          className="img_product_cart"
          alt={valueProduct[1]}
          src={valueProduct[4]}
        />

        <section>
          <p>{valueProduct[1]}</p>
          <span>${valueProduct[2]}</span>
          <p></p>
        </section>

          <span>x{count}</span>
      </section>
    </>
  );
};

export default ProductInTheCart;
