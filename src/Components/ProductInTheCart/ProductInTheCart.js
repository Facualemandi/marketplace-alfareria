import React, { useState } from "react";
import { BsCartX } from "react-icons/bs";
import AcumulationOfProductCart from "../AcumulationOfProductCart/AcumulationOfProductCart";
import WhatsApp from "../WhatsApp/WhatsApp";
import "./ProductInTheCart.css";

const ProductInTheCart = ({
  count,
  productInTheCart,
  setProductInTheCart,
  newCount,
  newElementInCart,
}) => {

  
  const productValue = Object.values(productInTheCart);


  const deleteObj = (id) => {
    const isDelete = productValue.findIndex((el) => el.id === id);
    const newObj = [...productValue];
    newObj.splice(isDelete, 1);
    setProductInTheCart(newObj);
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
            id={el.id}
            name={el.name}
            image={el.image}
            price={el.price}
            count={count}
            productValue={productValue}
            deleteObj={deleteObj}
            productInTheCart={productInTheCart}
            newCount={newCount}
            newElementInCart={newElementInCart}
          />
        ))
      
      )}
         
         {productValue.length > 0 &&  <WhatsApp productInTheCart={productInTheCart}/>}
        
    </>
  );
};

export default ProductInTheCart;