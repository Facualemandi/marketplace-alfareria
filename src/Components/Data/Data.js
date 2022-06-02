import "./Data.css";
import React, { useState } from "react";
import DataEnvio from "../DataEnvío/DataEnvio";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillWarning } from "react-icons/ai";

const initialValue = {
  nombre: "",
  apellido: "",
  calle: "",
  numero: "",
};

const Data = ({ productInTheCart }) => {
  const [form, setForm] = useState(initialValue);

  const products = productInTheCart.map((el) => {
    const isProduct = el.name;
    const isAmount = `x(${el.amount})`;

    return [isAmount, isProduct];
  });

  let mobile = [
    "iphone",
    "ipad",
    "android",
    "blackberry",
    "nokia",
    "opera mini",
    "windows mobile",
    "windows phone",
    "iemobile",
  ];

  function isMobile() {
    let agent = navigator.userAgent;
    mobile.map((el) => {
      if (agent.toLowerCase().indexOf(el.toLowerCase()) > 0) {
        return true;
      } else {
        return false;
      }
    });
  }

  const urlDesktop = "https://web.whatsapp.com/";
  const urlMobile = "whatsapp://";
  const telefono = "543517653448";

  const onSubmit = (e) => {
    e.preventDefault();

    let mensaje = `send?phone= + ${telefono} + &text=*_Formulario Easy App CODE_*%0A*¿Cual es tu nombre?*%0A + ${form.nombre} %0A*¿Cuáles son tus apellidos?*%0A + ${form.apellido}`;
    if (isMobile()) {
      window.open(urlMobile + mensaje, "_blank");
    } else {
      window.open(urlDesktop + mensaje, "_blank");
    }
  };

  const onChangeValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(products);
  return (
    <>
      <form id="formulario" class="formulario" onSubmit={onSubmit}>
        <h1>Último paso</h1>
        <div class="box-input">
          <input
            name="nombre"
            type="text"
            value={form.name}
            onChange={onChangeValue}
            required
          />
          <label>Nombre</label>
        </div>
        <div class="box-input">
          <input
            name="apellido"
            type="text"
            value={form.apellido}
            onChange={onChangeValue}
            required
          />
          <label>Apellido</label>
        </div>
        <button id="submit" type="submit" class="boton">
          <i class="fab fa-whatsapp"></i> Enviar WhatsApp
        </button>
      </form>
    </>
  );
};

export default Data;
