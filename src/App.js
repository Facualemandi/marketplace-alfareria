import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContainerUI from "./Components/AContainerUI/ContainerUI";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import DescriptionOneProduct from "./Components/FDescriptionOneProduct/DescriptionOneProduct";
import NavegationContainer from "./Components/NavegationContainer/NavegationContainer";
import { useAddDelete } from "./Hooks/useAddDelete";
import Loader from "./Loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  const {count, addCount, deleteCount, setCount} = useAddDelete()


  const [descriptionProduct, setDescriptionProduct] = useState([]);
  const [cartPanel, setCartPanel] = useState(false);
  const [productInTheCart, setProductInTheCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newCount, setNewCount] = useState(0);
  const [newId, setNewId] = useState();

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
        setCount(0)
      }
    });
  }, [productInTheCart]);
  


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

  const nav = useNavigate();
  const onReturn = () => {
    nav("/");
  };

  function loaderFalse() {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }
  loaderFalse();

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
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      )}
      
     
    </>
  );
}

export default App;
