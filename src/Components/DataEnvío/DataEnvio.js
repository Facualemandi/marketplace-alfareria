import React, { useState } from "react";
import "./DataEnvio.css";


const initialValue = {
  name:'',
  apellido:'',
}

const DataEnvio = ({form, changeValue}) => {
  const [data, setData] = useState(initialValue)



  return (
    <>
      <form className="container_form_second">
        <p className="direccion">Dirección:</p>
        <section className="">
          <section className="section_direction">
            <label for="calle">Calle</label>
            <input type={"text"} id="calle" placeholder="dirección"  />
          </section>

          <section className="section_direction">
            <label for="numero">Número</label>
            <input type='number' id="numero" placeholder="dirección" />
          </section>
        </section>

        <section className="section_dpto">
          <p className="dpto_question">Es un departamento?</p>
          <section className="response">
            <span onClick={''}>Si</span>
            <span>No</span>
          </section>

          {'' && (
            <section className="dpto_description">
              <label for="dpto">Piso/Dpto</label>
              <input type={"text"} id="dpto" placeholder="dirección" />
            </section>
          )}
        </section>
      </form>
    </>
  );
};

export default DataEnvio;
