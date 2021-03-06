import React, { useState } from "react";
import "./DataEnvio.css";



const DataEnvio = ({ form, onChangeValue, setForm }) => {
  const [dpto, setDpto] = useState(false)
  const [dptoFalse, setdptoFalse] = useState(false)

  const changeRadio = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const isDpto = () => {
    if(!dpto){
      setDpto(true)
      setdptoFalse(false)
    }else{
      setDpto(false)
    }
  }

  const isNotDpto = () => {
       if(!dptoFalse){
        setdptoFalse(true)
        setDpto(false)
       }
  }



  console.log(form)
  return (
    <>
      <form className="container_form_second">


      <section className="section_inputs_radio">
        <p className="barrio"> Por favor, selecciona un barrio</p>

         <section>
           <input className="inp_radio" type={'radio'} name='barrio' value='Los Paraisos'  onChange={changeRadio}/>
           <label for='barrio' >Los Paraisos</label>
          </section>

          <section>
            <input className="inp_radio" type={'radio'} name='barrio' value='San Martin' onChange={changeRadio}/>
            <label for='barrio' >San Martin</label>
          </section>

          <section>
            <input className="inp_radio" type={'radio'} name='barrio' value='Nueva Córdoba' onChange={changeRadio}/>
            <label for='barrio' >Nueva Córdoba</label>
          </section>

        <section>
          <input className="inp_radio" type={'radio'} name='barrio' value='Centro' onChange={changeRadio}/>
          <label for='barrio' >Centro</label>
       </section>

    </section>
 

        <section className="section_direccion">
        
        <p className="direccion">Dirección:</p>
          <section className="section_direction">
            <label for="calle">Calle</label>
            <input type={"text"} name="calle" placeholder="dirección" value={form.calle} onChange={onChangeValue}/>
          </section>

          <section className="section_direction">
            <label for="numero">Número</label>
            <input type={"text"} name="numero" placeholder="dirección" value={form.numero} onChange={onChangeValue}/>
          </section>
        </section>

        <section className="section_dpto">
          <p className="dpto_question">Es un departamento?</p>
          <section className="response">
            <span onClick={isDpto} className={dpto && 'dpto_active'}>Si</span>
            <span onClick={isNotDpto} className={dptoFalse && 'dpto_inactive'}>No</span>
          </section>

          {dpto && (
            <section className="dpto_description">
              <label for="dpto">Piso/Dpto</label>
              <input type={"text"} name="dpto" onChange={onChangeValue} placeholder="Piso/Dpto" />
            </section>
          )}
        </section>
      </form>
    </>
  );
};

export default DataEnvio;
