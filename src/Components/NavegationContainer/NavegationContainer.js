import React from "react";
import "./NavegationContainer.css";
import { GiShoppingCart } from "react-icons/gi";
import ProductInTheCart from "../ProductInTheCart/ProductInTheCart";

const NavegationContainer = ({ openCartPanel, cartPanel, productInTheCart, count, setProductInTheCart}) => {
  // let objetProduct = Object.values(productInTheCart)


  const valueProduct = Object.values(productInTheCart)


  return (
    <>
     {cartPanel && 
       <section className="panel_container">     
            <ProductInTheCart
              valueProduct={valueProduct}
              count={count}
              productInTheCart={productInTheCart}
              setProductInTheCart={setProductInTheCart}
            />
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
