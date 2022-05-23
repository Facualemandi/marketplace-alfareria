import React from "react";
import "./NavegationContainer.css";
import { GiShoppingCart } from "react-icons/gi";

const NavegationContainer = ({ openCartPanel, cartPanel }) => {
  return (
    <>
     {cartPanel && 
       <section className="panel_container">
            
       </section>
     }

      <nav className="nav_conatiner_cart">
        <section onClick={openCartPanel}>
          {/* <span>0</span> */}
          <GiShoppingCart className="cart_vanegation_container" />
          <p> Cart </p>
        </section>
      </nav>
    </>
  );
};

export default NavegationContainer;
