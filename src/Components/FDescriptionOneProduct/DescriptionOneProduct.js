import React from "react";
import AddCartProduct from "../GAddCartProduct/AddCartProduct";
import ModalCheck from "../ModalCheck/ModalCheck";
import "./DescriptionOneProduct.css";
import IconModalCheck from "../IconModalCheck/IconModalCheck";

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
  const { name, description, price, image } = descriptionProduct;

  return (
    <>
      <section>
        <img className="img_description_one" alt={name} src={image} />

        <section className="section_description_one">
          <p>{name}</p>

          <span>${price}</span>
          <p>{description}</p>
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
