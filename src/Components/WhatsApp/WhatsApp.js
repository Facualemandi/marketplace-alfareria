import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import './WhatsApp.css'

const WhatsApp = ({productInTheCart}) => {




 

 
    
  return (
    <>
    
      <section className="section_whatsapp">
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
