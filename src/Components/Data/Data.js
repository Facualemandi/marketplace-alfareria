import "./Data.css";
import React, { useState } from "react";
import DataEnvio from "../DataEnvío/DataEnvio";
import { RiWhatsappFill } from 'react-icons/ri';

const initialValue = {
  name: "",
  apellido: "",
};

const Data = ({ productInTheCart }) => {
  const [retiro, setRetiro] = useState(false);
  const [envio, setEnvio] = useState(false);
  const [form, setForm] = useState(initialValue);

  const retiroProduct = () => {
    if (!retiro) {
      setRetiro(true);
      setEnvio(false);
    } else {
      setRetiro(false);
    }
  };
  const envioProduct = () => {
    if (!envio) {
      setEnvio(true);
      setRetiro(false);
    } else {
      setEnvio(false);
    }
  };

  const changeValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const products = productInTheCart.map((el) => {
    const isProduct = el.name;
    const isAmount = el.amount;

    return [isProduct, isAmount];
  });

  console.log(products);
  return (
    <>
      <section className="container_data">
        <form className="form_container_principal">
          <div className="container_name_surname">
            <label for="name">Nombre:</label>
            <input
              type={"text"}
              name="name"
              placeholder="Enter your name"
              onChange={changeValue}
              value={form.name}
            />
          </div>

          <div className="container_name_surname">
            <label for="apellido">Apellido:</label>
            <input
              type={"text"}
              name="apellido"
              placeholder="Enter your surname"
              onChange={changeValue}
              value={form.apellido}
            />
          </div>
        </form>

        <p className="forma_de_entrega">Forma de entrega:</p>
        <section className="">
          <section className="type_entrega">
            <p onClick={retiroProduct}>Lo retiro personalmente</p>
            <p onClick={envioProduct}>Necesito que me lo envíen</p>
          </section>

          {envio && <DataEnvio />}
        </section>

        <form className="ref">
          <label for="referencias" className="referencia">
            Referencias:
          </label>
          <input type={"text"} id="referencias" placeholder="dirección" />
        </form>

        <section className="section_pago">
          <p className="forma_de_pago">Forma de pago</p>

          <section className="pago">
            <p>Efectivo</p>
            <p>Transferencia</p>
          </section>
        </section>

        <section className="section_link_wsp">
          <a
            className="link_whatapp"
            href={`https://api.whatsapp.com/send?phone=543517653448&text=Hola!%20Me%20llamo%20${form.name}%20${form.apellido}%20Y%20quiero%20pedirte%20${products[0]}%20${products[1]}`}
          >
            Hacer pedido por WhatsApp
            <RiWhatsappFill className="icon_wsp"/>
          </a>
        </section>
      </section>
    </>
  );
};

export default Data;
