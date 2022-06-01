import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Bowls = ({ name, image, price, seeProduct, el, size }) => {
  const [lookProduct, setLookProduct] = useState(false);

  const detailsProduct = () => {
    if (!lookProduct) {
      setLookProduct(true);
    } else {
      setLookProduct(false);
    }
  };

  return (
    <>
      <NavLink
        to={`/description/${name}`}
        className="decoration"
        onClick={() => seeProduct(el)}
      >
        <section
          className={`container_prodcts_ui ${lookProduct && "is-active"}`}
          onClick={detailsProduct}
        >
          <img src={image} alt={name} className="img_producs_ui" />

          <section className="section_description_product">
            <p>{name}</p>
            <p>{size}</p>
            <span>${price}</span>
          </section>
        </section>
      </NavLink>
    </>
  );
};

export default Bowls;
