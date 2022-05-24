import React from "react";
import { FaSadCry } from 'react-icons/fa';
import "./ProductInTheCart.css";

const ProductInTheCart = ({ valueProduct, count, productInTheCart }) => {
  const totalValue = valueProduct[2] * count;
  console.log(productInTheCart);

  const productValue = Object.values(productInTheCart);

  const asd = () => {
    console.log(productValue);
  };

  return (
    <>
      {/* {!productInTheCart && <p> Hola</p> } */}
      {productValue.length > 0 ? (
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
      ) : (
        <p onClick={asd} className='no_product'> No Hay productos <FaSadCry className="icon_cry"/> </p>
      )}
    </>
  );
};

export default ProductInTheCart;
