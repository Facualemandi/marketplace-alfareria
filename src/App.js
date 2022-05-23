import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContainerUI from "./Components/AContainerUI/ContainerUI";
import DescriptionOneProduct from "./Components/FDescriptionOneProduct/DescriptionOneProduct";
import NavegationContainer from "./Components/NavegationContainer/NavegationContainer";

function App() {
  const [descriptionProduct, setDescriptionProduct] = useState([]);
  const [cartPanel, setCartPanel] = useState(false);
  const [productInTheCart, setProductInTheCart] = useState([]);
  const [count, setCount] = useState(0);

  const addProductCart = () => {
    if (count > 0) {
      setProductInTheCart(descriptionProduct);
    } else {
      console.log("Es igual a 0");
    }
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const deleteCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
