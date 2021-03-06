import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContainerUI from "./Components/AContainerUI/ContainerUI";
import Data from "./Components/Data/Data";
import DescriptionOneProduct from "./Components/FDescriptionOneProduct/DescriptionOneProduct";
import NavegationContainer from "./Components/NavegationContainer/NavegationContainer";
import { useAddDelete } from "./Hooks/useAddDelete";
import { useLoader } from "./Hooks/useLoader";
import { useOpenCartPanel } from "./Hooks/useOpenCartPanel";
import Loader from "./Loader/Loader";

function App() {
  const { count, addCount, deleteCount, setCount } = useAddDelete();
  const { cartPanel, openCartPanel } = useOpenCartPanel();
  const { loader } = useLoader();
  const [descriptionProduct, setDescriptionProduct] = useState([]);
  const [productInTheCart, setProductInTheCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newCount, setNewCount] = useState(0);
  const [newId, setNewId] = useState(0);

  const addProductCart = (data, id) => {
    if(count > 0){
      if (productInTheCart.includes(data)) {
        const asd = productInTheCart.find((obj) => obj.id === id);
        asd.amount = count;
        setCount(0);
      } else {
        setProductInTheCart([...productInTheCart, data]);
        setOpenModal(true);
        setTimeout(() => {
          setOpenModal(false);
        }, 1000);
        setNewId(id);
      }

    }
  };


  useEffect(() => {
    productInTheCart.find((obj) => {
      setNewId(0)
      if (obj.id === newId) {
        obj.amount = count;
        setNewCount(obj.amount);
        setCount(0);
      }
    });
  }, [productInTheCart]);

  const seeProduct = (el) => {
    setDescriptionProduct(el);
  };

  const nav = useNavigate();
  const onReturn = () => {
    nav("/");
  };

  return (
    <>
      {loader && <Loader />}

      <NavegationContainer
        openCartPanel={openCartPanel}
        cartPanel={cartPanel}
        productInTheCart={productInTheCart}
        setProductInTheCart={setProductInTheCart}
        count={count}
        descriptionProduct={descriptionProduct}
        newCount={newCount}
        setNewCount={setNewCount}
      />

      {!loader && (
        <Routes>
          <Route path="/" element={<ContainerUI seeProduct={seeProduct} />} />
          <Route
            path="/description/:name"
            element={
              <DescriptionOneProduct
                descriptionProduct={descriptionProduct}
                addProductCart={addProductCart}
                count={count}
                addCount={addCount}
                deleteCount={deleteCount}
                openModal={openModal}
                setOpenModal={setOpenModal}
                onReturn={onReturn}
              />
            }
          />
          <Route
            path="/orden"
            element={<Data productInTheCart={productInTheCart} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
