import React from "react";
import "./IconModalCheck.css";
import { BsCheck2Circle } from "react-icons/bs";

const IconModalCheck = () => {
  return (
    <>
      <section className="container_icon_check">
        <p>Producto Agregado al Carrito</p>
        <BsCheck2Circle className="icon_check_modal" />
      </section>
    </>
  );
};

export default IconModalCheck;
