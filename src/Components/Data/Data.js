import "./Data.css";
import React, { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import DataEnvio from "../DataEnvío/DataEnvio";

const initialValue = {
  nombre: "",
  apellido: "",
  calle: "",
  numero: "",
  barrio: "",
  dpto: "",
};

const Data = ({ productInTheCart }) => {
  const [form, setForm] = useState(initialValue);
  const [retiroPersonal, setRetiroPersonal] = useState(false);
  const [efectivo, setEfectivo] = useState(false);
  const [transferencia, setTransferencia] = useState(false);
  const [envio, setEnvio] = useState(false);

  const products = productInTheCart.map((el) => {
    const isProduct = el.name;
    const isAmount = `(x${el.amount})`;

    return [`%0A${isProduct}${isAmount}%0A`];
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

    let mensaje = `send?phone=${telefono}&text=*_Hola!, mi pedido es el siguiente:_*%0A*¿Cual es tu nombre?*%0A${
      form.nombre
    }%20${form.apellido}%0A*¿Cual es tu pedido?*%0A${products.join(
      ""
    )}%0A*¿Forma de entrega?*%0A${
      retiroPersonal ? "Lo retiro personalmente" : "Necesito que me lo envíen"
    }%0A*Forma de pago?*%0A${efectivo ? "Efectivo" : "Transferencia"}%0A*${
      form.calle && "Dirección"
    }*%0A${form.calle}%0A*${form.numero && "Numero:"}*%0A${form.numero}%0A*${
      form.barrio && "Barrio:"
    }*%0A${form.barrio}%0A*${form.dpto && "Dpto:"}*%0A${form.dpto}`;
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
      setEnvio(false);
    } else {
      setRetiroPersonal(false);
    }
  };

  const isEnvio = () => {
    if (!envio) {
      setEnvio(true);
      setRetiroPersonal(false);
    } else {
      setEnvio(false);
    }
  };

  const isEfectivo = () => {
    if (!efectivo) {
      setEfectivo(true);
      setTransferencia(false);
    } else {
      setEfectivo(false);
    }
  };
  const isTransferencia = () => {
    if (!transferencia) {
      setTransferencia(true);
      setEfectivo(false);
    } else {
      setTransferencia(false);
    }
  };

  return (
    <>
      <form id="formulario" className="formulario" onSubmit={onSubmit}>
        <h1 className="h1_form">Último paso</h1>
        <span className="form_spam">
          Los datos marcados con ( * ) son obligatorios
        </span>
        <div class="box_input">
          <label>Nombre: *</label>
          <input
            name="nombre"
            type="text"
            value={form.name}
            onChange={onChangeValue}
            required
          />
        </div>
        <div class="box_input">
          <label>Apellido: *</label>
          <input
            name="apellido"
            type="text"
            value={form.apellido}
            onChange={onChangeValue}
            required
          />
        </div>

        <p className="form_entrega"> Forma de entrega: *</p>

        <section className="section_entrega">
          <p
            onClick={isRetiroPersonal}
            className={`personalmente ${retiroPersonal && "is-active"}`}
          >
            Lo retiro personalmente
          </p>

          <p
            className={`form_envio_p ${envio && "is-active"}`}
            onClick={isEnvio}
          >
            Necesito que me lo envíen
          </p>
        </section>
        {envio && (
          <DataEnvio
            form={form}
            setForm={setForm}
            onChangeValue={onChangeValue}
          />
        )}

        <p className="pago"> Forma de pago: *</p>

        <section className="section_pago">
          <p
            className={`${efectivo && "efectivo_active"}`}
            onClick={isEfectivo}
          >
            Efectivo
          </p>
          <p
            className={`${transferencia && "trasnferencia_active"}`}
            onClick={isTransferencia}
          >
            Transferencia
          </p>
        </section>

        {form.nombre && form.apellido && retiroPersonal && (efectivo || transferencia) && (
          <button id="submit" type="submit" className="form_btn">
            {" "}
            Envíar pedido por WhatsApp <RiWhatsappFill className="icon_wsp" />{" "}
          </button>
        )}

        {envio &&
          form.nombre &&
          form.apellido &&
          form.calle &&
          form.barrio &&
          form.dpto &&
          form.numero &&
          (transferencia || efectivo) && (
            <button id="submit" type="submit" className="form_btn">
              {" "}
              Envíar pedido por WhatsApp <RiWhatsappFill className="icon_wsp" />{" "}
            </button>
          )}
      </form>
    </>
  );
};

export default Data;

// nombre: "",
// apellido: "",
// calle: "",
// numero: "",
// barrio: "",
// dpto: "",
