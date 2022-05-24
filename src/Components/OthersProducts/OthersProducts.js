import React from "react";
import "./OthersProducts.css";

const OthersProducts = ({ name, price, image }) => {
  return (
    <>
      <section className="container_product">
        <img alt={name} src={image} className="img_other_product" />
        <section className="section_other_products_description">
          <p>{name}</p>
          <p>${price}</p>
        </section>
      </section>
    </>
  );
};

export default OthersProducts;
