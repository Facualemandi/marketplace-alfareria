import React from "react";
import "./Menu.css";
import { RiMenu5Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

const Menu = ({ handleOpenMenu, openMenu }) => {
  return (
    <>
      <section className="container_menu" onClick={handleOpenMenu}>
        {!openMenu && <RiMenu5Fill className="icon_menu" />}
        {openMenu && <GrClose className="icon_menu" />}
      </section>
    </>
  );
};

export default Menu;
