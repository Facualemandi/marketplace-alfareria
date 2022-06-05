import React, { useState } from "react";
import "./Logo.css";
import LogoCeramica from "./CeramicaArtesanalLogo.png";
import Menu from "../DMenuUI/Menu";
import OpenMenuLateral from "../OpenMenuLateral/OpenMenuLateral";

const Logo = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <>
      <section className="container_total_logo">
        <section>
          <img src={LogoCeramica} alt="Ceramica Artesanal" className="logo" />
          <p>Encontra y busca todo sobre Ceramica </p>
        </section>

        <section>
          <Menu handleOpenMenu={handleOpenMenu} openMenu={openMenu} />
        </section>

        <OpenMenuLateral openMenu={openMenu} className="menu_lateral" />
      </section>
    </>
  );
};

export default Logo;
