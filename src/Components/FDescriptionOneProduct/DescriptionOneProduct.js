import React from "react";
import AddCartProduct from "../GAddCartProduct/AddCartProduct";
import "./DescriptionOneProduct.css";

const DescriptionOneProduct = ({ descriptionProduct }) => {
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

           <AddCartProduct/>

      </section>
    </>
  );
};

export default DescriptionOneProduct;
