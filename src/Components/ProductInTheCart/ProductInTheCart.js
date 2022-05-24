import React, { useState } from "react";
import { BsCartX } from "react-icons/bs";
import AcumulationOfProductCart from "../AcumulationOfProductCart/AcumulationOfProductCart";
import "./ProductInTheCart.css";

const ProductInTheCart = ({ valueProduct, count, productInTheCart }) => {
  const totalValue = valueProduct[2] * count;

  const productValue = Object.values(productInTheCart);

  const asd = () => {
    console.log(productValue);
    console.log(valueProduct);
  };

  return (
    <>
      {!productValue.length ? (
        <p className="no_product">
          Empty cart <BsCartX className="icon_cry" />
        </p>
      ) : (
        productValue.map((el) => (
          <AcumulationOfProductCart
            key={el.id}
            asd={asd}
            name={el.name}
            image={el.image}
            price={el.price}
            count={count}
            productValue={productValue}
          />
        ))
      )}
    </>
  );
};

export default ProductInTheCart;
