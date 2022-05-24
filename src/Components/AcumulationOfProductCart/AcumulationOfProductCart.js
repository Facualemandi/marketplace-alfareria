import React from "react";
import "./AcumulationOfProductCart.css";

const AcumulationOfProductCart = ({
  asd,
  productValue,
  name,
  image,
  price,
  count,
}) => {
  const onclick = () => {
    console.log(productValue);
  };

  return (
    <>

      <section className="container_acumulation_procut">
        <img src={image} className="img_acumulation_product" />

        <section className="section_acumularion_product">
          <p>{name}</p>
          <span>${price}</span>
        </section>

        <p className="count_acumulation">x{count}</p>
      </section>
    </>
  );
};

export default AcumulationOfProductCart;
