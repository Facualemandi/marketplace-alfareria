import React from "react";
import "./NavegationContainer.css";
import { GiShoppingCart } from "react-icons/gi";
import ProductInTheCart from "../ProductInTheCart/ProductInTheCart";

const NavegationContainer = ({
  openCartPanel,
  cartPanel,
  productInTheCart,
  count,
  setProductInTheCart,
  newCount,
  setNewCount,

}) => {
  // let objetProduct = Object.values(productInTheCart)

  const valueProduct = Object.values(productInTheCart);

  return (
    <>
      {cartPanel && (
        <section className="panel_container">
          <ProductInTheCart
            valueProduct={valueProduct}
            count={count}
            productInTheCart={productInTheCart}
            setProductInTheCart={setProductInTheCart}
            newCount={newCount}
            setNewCount={setNewCount}
          />
        </section>
      )}

<div className="div_container_nav">

      <nav className="nav_conatiner_cart">
        <section onClick={openCartPanel} className="section_iconcart_number">
          <section>
            <GiShoppingCart
              className={`cart_vanegation_container ${
                productInTheCart.length > 0 && "is-active"
              }`}
            />
            <p
              className={` cart_navegation_nav ${
                productInTheCart.length > 0 && "cart_active"
              }`}
            >
              {" "}
              Cart{" "}
            </p>
          </section>
          <span
            className={`number_cart ${
              productInTheCart.length > 0 && "is-active"
            }`}
          >
            {productInTheCart.length}
          </span>
        </section>
      </nav>
</div>
    </>
  );
};

export default NavegationContainer;
