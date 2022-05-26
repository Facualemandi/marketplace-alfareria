import "./AcumulationOfProductCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const AcumulationOfProductCart = ({
  deleteObj,
  name,
  image,
  price,
  id,
  newCount,
  amount,
}) => {

 

  const totalValue = newCount * price;

  return (
    <>
      <section className="container_acumulation_procut">
        <img src={image} alt={name} className="img_acumulation_product" />

        <section className="section_acumularion_product">
          <p>{name}</p>
          <span>${price}</span>
          <p className="total_acumulation">Total: ${totalValue}.00</p>
        </section>

        <p className="count_acumulation">x{amount}</p>

        <RiDeleteBin6Line
          onClick={() => deleteObj(id)}
          className="icon_delete_cart"
        />
      </section>

     
    </>
  );
};

export default AcumulationOfProductCart;
