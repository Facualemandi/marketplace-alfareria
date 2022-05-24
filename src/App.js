import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContainerUI from "./Components/AContainerUI/ContainerUI";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import DescriptionOneProduct from "./Components/FDescriptionOneProduct/DescriptionOneProduct";
import NavegationContainer from "./Components/NavegationContainer/NavegationContainer";
import { useCount } from "./Hooks/useCount";
import { useTotalState } from "./Hooks/useTotalState";
import Loader from "./Loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  const { count, addCount, deleteCount } = useCount();
  const {
    setOpenModal,
    setProductInTheCart,
    productInTheCart,
    cartPanel,
    descriptionProduct,
    openModal,
    newCount,
    addProductCart,
    seeProduct,
    openCartPanel,
  } = useTotalState();

  const nav = useNavigate();
  const onReturn = () => {
    nav("/");
  };

  function loaderFalse() {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
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
