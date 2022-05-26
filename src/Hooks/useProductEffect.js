import React, { useEffect, useState } from 'react'
import { useAddDelete } from './useAddDelete';

export const useProductEffect = () => {
    const {count, setCount} = useAddDelete()
    const [productInTheCart, setProductInTheCart] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [newId, setNewId] = useState();
    const [newCount, setNewCount] = useState(0);
    

    const addProductCart = (data, id) => {
        if (count > 0) {
          setProductInTheCart([...productInTheCart, data]);
          setOpenModal(true);
          setNewId(id);
        }
      };
      useEffect(() => {
        productInTheCart.find((obj) => {
          if (obj.id === newId) {
            obj.amount = count;
            setNewCount(obj.amount);
            setCount(0);
          }
        });
      }, [productInTheCart]);
    



  return {
      productInTheCart,
      newCount,
      openModal,
      newId,
      setNewId,
      setNewCount,
      setProductInTheCart,
      setOpenModal,
      addProductCart,
  }
}
