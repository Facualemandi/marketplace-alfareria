import "./AcumulationOfProductCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";

const AcumulationOfProductCart = ({
  deleteObj,
  name,
  image,
  price,
  id,
  amount,
  el,
  setPrices,
}) => {
  const [isNewAmount, setIsNewAmount] = useState(amount);

  const totalValue = isNewAmount * price;

  const newAmount = (el) => {
    if (amount > 0) {
      el.amount = el.amount + 1;
      setIsNewAmount(el.amount);
    }
  };
  const deleteAmount = (el) => {
    if (el.amount === 1) {
      setIsNewAmount(1);
    } else {
      el.amount = el.amount - 1;
      setIsNewAmount(el.amount);
    }
  };

  useEffect(() => {
    if (isNewAmount) setPrices((prevState) => [...prevState, totalValue]);
  }, [isNewAmount]);

  
  return (
    <>
      <section className="container_acumulation_procut">
        <img src={image} alt={name} className="img_acumulation_product" />

        <section className="section_acumularion_product">
          <p>{name}</p>
          <span>${price}</span>
          <p className="total_acumulation">Total: ${totalValue}.00</p>
        </section>

        <section className="section_acumulation_cart">
          <p className="count_acumulation">x{isNewAmount}</p>

          <section className="acumulation_add_minus_cart">
            <button onClick={() => deleteAmount(el)}>-</button>

            <button onClick={() => newAmount(el)}>+</button>
          </section>
        </section>

        <RiDeleteBin6Line
          onClick={() => deleteObj(id)}
          className="icon_delete_cart"
        />
      </section>
    </>
  );
};

export default AcumulationOfProductCart;
