import React, { useState } from "react";
import "./DataEnvio.css";


const initialValue = {
  name:'',
  apellido:'',
}

const DataEnvio = () => {
  const [dpto, setDpto] = useState(false);
  const [data, setData] = useState(initialValue)

  const isDpto = () => {
    if (!dpto) {
      setDpto(true);
    } else {
      setDpto(false);
    }
  };

  const changeValue = (e) => {
      console.log(e.target.value)
  }



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
            <span onClick={isDpto}>Si</span>
            <span>No</span>
          </section>

          {dpto && (
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
