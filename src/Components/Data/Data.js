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
  const [retiroPersonal, setRetiroPersonal] = useState(false);

  const products = productInTheCart.map((el) => {
    const isProduct = el.name;
    const isAmount = `x(${el.amount})`;

    return [isAmount, isProduct];
  });

  function isMobile() {
    if (sessionStorage.desktop) return false;
    else if (localStorage.mobile) return true;
    var mobile = [
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
    for (var i in mobile)
      if (
        navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0
      )
        return true;
    return false;
  }

  const urlDesktop = "https://web.whatsapp.com/";
  const urlMobile = "whatsapp://";
  const telefono = "543517653448";

  const onSubmit = (e) => {
    e.preventDefault();

    let mensaje = `send?phone=${telefono}&text=*_Hola!, mi pedido es el siguiente:_*%0A*¿Cual es tu nombre?*%0A${form.nombre}%20${form.apellido}%0A*¿Cual es tu pedido?*%0A${products}*%0A¿Como es tu forma de entrega?${retiroPersonal && 'Lo retiro personalmente'}`;
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

  const isRetiroPersonal = () => {
    if (!retiroPersonal) {
      setRetiroPersonal(true);
    } else {
      setRetiroPersonal(false);
    }
  };
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

        <p> Forma de entrega:</p>

        <section className="section_entrega">
          <p onClick={isRetiroPersonal} className="personalmente">
            Lo retiro personalmente
          </p>
        </section>

        <button id="submit" type="submit" class="boton">
          <i class="fab fa-whatsapp"></i> Enviar WhatsApp
        </button>
      </form>
    </>
  );
};

export default Data;
