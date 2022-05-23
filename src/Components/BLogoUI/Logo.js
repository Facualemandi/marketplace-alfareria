import React from "react";
import './Logo.css'
import LogoCeramica from "./CeramicaArtesanalLogo.png";

const Logo = () => {
  return (
    <>
      <section className="container_total_logo">
        <img src={LogoCeramica} alt="Ceramica Artesanal" className="logo" />
        <p>Encontra y busca todo sobre Ceramica </p>
      </section>
    </>
  );
};

export default Logo;
