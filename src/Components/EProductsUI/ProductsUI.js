import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProductsUI.css";
import { BsArrowRightShort } from "react-icons/bs";
import { CgMoreVerticalAlt } from "react-icons/cg";

const ProductsUI = ({
  image,
  name,
  price,
  el,
  seeProduct,
  size,
  addProductCart,
  data,
  count,
  addCount,
  deleteCount,
}) => {
  const [openCount, setOpenCount] = useState(false);

  const { id } = data;

  const openCountIcon = () => {
    if (!openCount) {
      setOpenCount(true);
    } else {
      setOpenCount(false);
    }
  };


  return (
    <>
      <section className={`container_prodcts_ui`}>
        <section className="section_products_ui">
            
       
        <section className="section_icon_more_products" onClick={() => seeProduct(el)} >
            <CgMoreVerticalAlt
              className="icon_more_products"
              onClick={openCountIcon}
            />
        </section>

            
            <img src={image} alt={name} className="img_producs_ui" />

          <section className="container_btns_images">


            {openCount && (
              <section className="btn_image">
                <section className="section_btns_imges">
                   <button className="btn_minus_image" onClick={deleteCount}> - </button>
                   <span>{count}</span>
                   <button className="btn_add_image" onClick={addCount}> + </button>
                </section>
                
                <section>
                  <button
                    className="add_cart_img"
                    onClick={() => addProductCart(data, id)}
                  >
                    Add to cart
                  </button>
                </section>
              </section>
            )}
          </section>
        </section>

        <section className="section_description_product">
          <p>{name}</p>
          <p>{size} </p>
          <span>${price}</span>
        </section>

        <NavLink to={`/description/${name}`} className="decoration">
          <p className="more_product" onClick={() => seeProduct(el)}>
            {" "}
            Ver más <BsArrowRightShort />{" "}
          </p>
        </NavLink>
      </section>
    </>
  );
};

export default ProductsUI;
