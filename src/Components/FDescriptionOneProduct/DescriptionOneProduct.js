import React from "react";
import AddCartProduct from "../GAddCartProduct/AddCartProduct";
import ModalCheck from "../ModalCheck/ModalCheck";
import "./DescriptionOneProduct.css";
import IconModalCheck from "../IconModalCheck/IconModalCheck";
import { SiMaterialdesign  } from "react-icons/si";
import { MdInvertColors   } from "react-icons/md";
import { MdOutlineColorLens   } from "react-icons/md";
import { IoIosResize   } from "react-icons/io";
import { MdOutlineDescription   } from "react-icons/md";

const DescriptionOneProduct = ({
  descriptionProduct,
  count,
  addProductCart,
  deleteCount,
  addCount,
  openModal,
  setOpenModal,
  onReturn,
}) => {
  const { name, description, price, image, secondary, primary, material, size} = descriptionProduct;

  // console.log(descriptionProduct)

  return (
    <>
      <section>
        <img className="img_description_one" alt={name} src={image} />

        <section className="section_description_one">
          <p>{name}</p>

          <p className="price_description_product">${price}</p>
          <p className="description_one"><IoIosResize className="icon_description"/>Tamaño:  <b>{size}</b></p>
          <p className="description_one"><SiMaterialdesign className="icon_description"/>Material: <b>{material}</b></p>
          <p className="description_one"><MdInvertColors className="icon_description"/>Color Principal: <b>{primary}</b></p>
          <p className="description_one"><MdOutlineColorLens className="icon_description"/>Colores Secundarios: <b>{secondary}</b></p>

          <section className="secttion_description_one_product">
               <p className="description_product_one" > <MdOutlineDescription className="icon_description"/>Descripción: </p>
               <p className="description_product"> {description}</p>
          </section>
        </section>

        {openModal && 
        <ModalCheck > 
               <IconModalCheck setOpenModal={setOpenModal}/>
        </ModalCheck>}

        <AddCartProduct
          data={descriptionProduct}
          count={count}
          addProductCart={addProductCart}
          addCount={addCount}
          deleteCount={deleteCount}
          onReturn={onReturn}

        />
      </section>
    </>
  );
};

export default DescriptionOneProduct;
