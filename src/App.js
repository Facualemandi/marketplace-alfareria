import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContainerUI from "./Components/AContainerUI/ContainerUI";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import DescriptionOneProduct from "./Components/FDescriptionOneProduct/DescriptionOneProduct";
import NavegationContainer from "./Components/NavegationContainer/NavegationContainer";
import Platos from "./Components/CategoriesProducts/Platos";
import { useAddDelete } from "./Hooks/useAddDelete";
import { useLoader } from "./Hooks/useLoader";
import { useOpenCartPanel } from "./Hooks/useOpenCartPanel";
import Loader from "./Loader/Loader";
import CategoriesProducts from "./Components/CategoriesProducts/Platos";

function App() {
  const { count, addCount, deleteCount, setCount } = useAddDelete();
  const { cartPanel, openCartPanel } = useOpenCartPanel();
  const { loader } = useLoader();
  const [descriptionProduct, setDescriptionProduct] = useState([]);
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
        </Routes>
      )}
    </>
  );
}

export default App;
