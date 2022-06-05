import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./WhatsApp.css";

const WhatsApp = ({ productInTheCart, makeOrder }) => {
  const prectioTotal = Object.values(productInTheCart).map((el) => {
    let totalAmount = el.amount;
    let price = el.price;
    return totalAmount * price;
  });

  let totalTotal = prectioTotal.reduce((a, b) => a + b, 0);
  console.log(totalTotal);

  const [asdasd, setAsdasd] = useState(totalTotal);

  console.log(asdasd)

  useEffect(() => {

   

  }, []);
  
  return (
    <>
      <section className="section_whatsapp">
        <section className="section_total_total_whatapp">
          <p className="total_total">
            Total: <b> ${totalTotal} </b>
          </p>
          <NavLink to="/orden">
            <p className="confirm_whatapp" onClick={makeOrder}>
              Finalizar pedido
            </p>
          </NavLink>
        </section>
      </section>
    </>
  );
};

export default WhatsApp;

// https://api.whatsapp.com/send?phone=543517653448&text=Hola!%20Quiero%20pedirte%20$%20x$%20por%20un%20total%20de%20$
