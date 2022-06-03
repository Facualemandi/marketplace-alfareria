import "./Data.css";
import React, { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";


const initialValue = {
  nombre: "",
  apellido: "",
  calle: "",
  numero: "",
};

const Data = ({ productInTheCart }) => {
  const [form, setForm] = useState(initialValue);
  const [retiroPersonal, setRetiroPersonal] = useState(false);
  const [efectivo, setEfectivo] = useState(false)

  const products = productInTheCart.map((el) => {
    const isProduct = el.name;
    const isAmount = `(x${el.amount})`;

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

    let mensaje = `send?phone=${telefono}&text=*_Hola!, mi pedido es el siguiente:_*%0A*¿Cual es tu nombre?*%0A${form.nombre}%20${form.apellido}%0A*¿Cual es tu pedido?*%0A${products}%0A*¿Como es tu forma de entrega?*%0A${ retiroPersonal && "Lo retiro personalmente"}%0A*Como es tu forma de pago?*%0A${efectivo && 'Pago con efectivo'}`;
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

  const isEfectivo = () => {
      if(!efectivo){
        setEfectivo(true)
      }else{
        setEfectivo(false)
      }
  }

  return (
    <>
      <form id="formulario" className="formulario" onSubmit={onSubmit}>
        <h1 className="h1_form">Último paso</h1>
        <span className="form_spam">
          Los datos marcados con ( * ) son obligatorios
        </span>
        <div class="box_input">
          <label>Nombre</label>
          <input
            name="nombre"
            type="text"
            value={form.name}
            onChange={onChangeValue}
            required
          />
        </div>
        <div class="box_input">
          <label>Apellido</label>
          <input
            name="apellido"
            type="text"
            value={form.apellido}
            onChange={onChangeValue}
            required
          />
        </div>

        <p className="form_entrega"> Forma de entrega:</p>

        <section className="section_entrega">
          <p
            onClick={isRetiroPersonal}
            className={`personalmente ${retiroPersonal && "is-active"}`}
          >
            Lo retiro personalmente
          </p>

          <p className="form_envio_p">Necesito que me lo envíen</p>
        </section>

        <p className="pago"> Forma de  pago:</p>

        <section className="section_pago">
               <p className={`${efectivo && 'efectivo_active'}`} onClick={isEfectivo}>Efectivo</p>
               <p>Transferencia</p>
        </section>


        {
        form.nombre && form.apellido && retiroPersonal && efectivo &&  
        <button id="submit" type="submit" className="form_btn">  Envíar pedido por WhatsApp <RiWhatsappFill className='icon_wsp'/> </button>}
      </form>
    </>
  );
};

export default Data;
