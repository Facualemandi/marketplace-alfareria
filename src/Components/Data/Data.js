import "./Data.css";
import React, { useState } from "react";
import DataEnvio from "../DataEnvío/DataEnvio";

const Data = () => {
  const [retiro, setRetiro] = useState(false);
  const [envio, setEnvio] = useState(false);

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

  return (
    <>
      <section className="container_data">
        <form className="form_container_principal">
          <div className="container_name_surname">
            <label for="name">Nombre:</label>
            <input type={"text"} id="name" placeholder="Enter your name" />
          </div>

          <div className="container_name_surname">
            <label for="apellido">Apellido:</label>
            <input
              type={"text"}
              id="apellido"
              placeholder="Enter your surname"
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
           <label for="referencias" className="referencia">Referencias:</label>
           <input type={"text"} id="referencias" placeholder="dirección" />
        </form>

        <section className="section_pago">
          <p className="forma_de_pago">Forma de pago</p>

          <section className="pago">
            <p>Efectivo</p>
            <p>Transferencia</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Data;
