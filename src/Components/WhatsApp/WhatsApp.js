import React, { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import "./WhatsApp.css";

const WhatsApp = ({ productInTheCart }) => {



  const prectioTotal = Object.values(productInTheCart).map(el => {
    let totalAmount = el.amount
    let price = el.price
    return totalAmount * price
  })
   const totalTotal = prectioTotal.reduce((a, b) => a + b, 0)



  return (
    <>
      <section className="section_whatsapp">
        <p className="total_total">Total: <b> ${totalTotal} </b></p>
        <a
          href={`https://api.whatsapp.com/send?phone=543517653448&text=Hola!%20Quiero%20pedirte%20$%20x$%20por%20un%20total%20de%20$`}
        >
          Pedi por WhatsApp <RiWhatsappFill className="icon_whatsapp" />
        </a>
      </section>
    </>
  );
};

export default WhatsApp;
