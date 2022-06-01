import "./Data.css";
import React, { useState } from "react";
import DataEnvio from "../DataEnvío/DataEnvio";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillWarning } from "react-icons/ai";

const initialValue = {
  name: "",
  apellido: "",
};

const Data = ({ productInTheCart }) => {
   
 let personalmente = 'Lo retiro personalmente'
 let isEnvio = 'Necesito que me lo envien'

  const [retiro, setRetiro] = useState(false);
  const [envio, setEnvio] = useState(false);
  const [form, setForm] = useState(initialValue);

  const [errorName, setErrorName] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [payment, setPayment] = useState(false);

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

  const isPayment = () => {
    if(!payment){
      setPayment(true)
    }else{
      setPayment(false)
    }
    }





  const changeValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const valueErrors = (e) => {
    if (!form.name) {
      setErrorName(true);
      e.preventDefault();
    }else{
      setErrorName(false)
    }
    if(!form.apellido){
      setErrorSurname(true)
      e.preventDefault();
    }else{
      setErrorSurname(false)
    }
  };

  const products = productInTheCart.map((el) => {
    const isProduct = el.name;
    const isAmount = `x(${el.amount})`;

    return [isAmount, isProduct];
  });


  console.log(products);
  return (
    <>
    <p className="finish"> Último Paso! </p>
    <span className="obligated">Todo lo que es marcado con (*) es obligatorio</span>
      <section className="container_data">
        <form className="form_container_principal">
          <div className="container_name_surname">
            <label for="name">Nombre: *</label>
            <input
              className='input_name'
              type={"text"}
              name="name"
              placeholder="Enter your name"
              onChange={changeValue}
              value={form.name}
            />
          </div>

          <div className="container_name_surname">
            <label for="apellido">Apellido: *</label>
            <input
              type={"text"}
              name="apellido"
              placeholder="Enter your surname"
              onChange={changeValue}
              value={form.apellido}
              className={`${errorSurname && "input_error_name"}`}
            />
          </div>
        </form>

        <p className="forma_de_entrega">Forma de entrega: *</p>
        <section className="">
          <section className="type_entrega">
            <p onClick={retiroProduct} className={`${retiro && 'envio_true'}`}>Lo retiro personalmente</p>
            <p onClick={envioProduct}>Necesito que me lo envíen</p>
          </section>
          {envio && <DataEnvio />}
        </section>

        <section className="section_pago">
          <p className={`forma_de_pago`} onClick={isPayment}>Forma de pago: *</p>

          <section className="pago">
            <p onClick={isPayment} className={`${payment && 'forma_pago_true'}`}>Efectivo</p>
            <p>Transferencia</p>
          </section>
        </section>

      {form.name.length > 0 && form.apellido.length > 0 && retiro && payment &&
        <section className="section_link_wsp">
        <a
          onClick={valueErrors}
          className="link_whatapp"
          href={`https://api.whatsapp.com/send?phone=543517653448&text=Hola!%20Me%20llamo%20${form.name}%20${form.apellido}%20Y%20quiero%20pedirte%20${products}%20${retiro && personalmente}`}
        >
          Hacer pedido por WhatsApp
          <RiWhatsappFill className="icon_wsp" />
        </a>
      </section>}
      </section>
    </>
  );
};

export default Data;
