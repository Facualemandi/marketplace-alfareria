import React, { useState } from "react";
import { useCount } from "./useCount";

export const useTotalState = () => {
  const { setCount } = useCount();

  const [descriptionProduct, setDescriptionProduct] = useState([]);
  const [cartPanel, setCartPanel] = useState(false);
  const [productInTheCart, setProductInTheCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newCount, setNewCount] = useState([]);

  const addProductCart = (data, count) => {
    if (count > 0) {
      setProductInTheCart([...productInTheCart, data]);
      setNewCount(count);
      setOpenModal(true);
      setCount(0);
    } else {
    }
  };

  const seeProduct = (el) => {
    setDescriptionProduct(el);
  };

  const openCartPanel = () => {
    if (!cartPanel) {
      setCartPanel(true);
    } else {
      setCartPanel(false);
    }
  };

  return {
    setProductInTheCart,
    cartPanel,
    descriptionProduct,
    openModal,
    newCount,
    addProductCart,
    seeProduct,
    openCartPanel,
    setOpenModal,
    productInTheCart
  };
};
