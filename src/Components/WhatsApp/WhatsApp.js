import React, { useEffect, useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./WhatsApp.css";

const WhatsApp = ({ productInTheCart, makeOrder }) => {
  
  
  const prectioTotal = Object.values(productInTheCart).map((el) => {
    let totalAmount = el.amount;
    let price = el.price;
    return totalAmount * price;
  });
  
  const totalTotal = prectioTotal.reduce((a, b) => a + b, 0)
  
  console.log(totalTotal)
  

  return (
    <>
      <section className="section_whatsapp">
        <section className="section_total_total_whatapp">
          <p className="total_total">
            Total: <b> ${totalTotal} </b>
          </p>
          <NavLink to="/orden">
          <p className="confirm_whatapp" >Finalizar pedido</p>
          </NavLink>
            
        </section>
      </section>
    </>
  );
};

export default WhatsApp;



// https://api.whatsapp.com/send?phone=543517653448&text=Hola!%20Quiero%20pedirte%20$%20x$%20por%20un%20total%20de%20$
