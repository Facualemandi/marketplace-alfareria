import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProductsUI.css";
import { BsWhatsapp } from 'react-icons/bs';

const ProductsUI = ({ image, name, price, el, seeProduct, size }) => {
  return (
    <>
      <NavLink
        to={`/description/${name}`}
        className="decoration"
        onClick={() => seeProduct(el)}
      >
        <section className="container_prodcts_ui">
          <section className="section_products_ui">
            <img src={image} alt={name} className="img_producs_ui" />
          </section>

          <section className="section_description_product">
            <p>{name}</p>
            <p>{size} </p>
            <span>${price}</span>
          </section>
        </section>
      </NavLink>
    </>
  );
};

export default ProductsUI;
