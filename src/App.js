import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContainerUI from "./Components/AContainerUI/ContainerUI";
import CheckProduct from "./Components/CheckProduct/CheckProduct";
import DescriptionOneProduct from "./Components/FDescriptionOneProduct/DescriptionOneProduct";
import NavegationContainer from "./Components/NavegationContainer/NavegationContainer";
import { useCount } from "./Hooks/useCount";

function App() {
  const { count, addCount, deleteCount, setCount } = useCount();
  const [descriptionProduct, setDescriptionProduct] = useState([]);
  const [cartPanel, setCartPanel] = useState(false);
  const [productInTheCart, setProductInTheCart] = useState([]);
  const [check, setCheck] = useState(false)


  const addProductCart = (data) => {
    if (count > 0) {
       setProductInTheCart([...productInTheCart, data]);
       setCheck(true)
    } else {
      console.log("Es igual a 0");
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



  return (
    <>
      <NavegationContainer
        openCartPanel={openCartPanel}
        cartPanel={cartPanel}
        productInTheCart={productInTheCart}
        count={count}
        descriptionProduct={descriptionProduct}

      />

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
              check={check}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
