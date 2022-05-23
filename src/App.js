import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContainerUI from "./Components/AContainerUI/ContainerUI";
import DescriptionOneProduct from "./Components/FDescriptionOneProduct/DescriptionOneProduct";
import NavegationContainer from "./Components/NavegationContainer/NavegationContainer";

function App() {

  const [descriptionProduct, setDescriptionProduct] = useState([])
  const [cartPanel, setCartPanel] = useState(false)

  const seeProduct = (el) => {
    setDescriptionProduct(el)
  }

  const openCartPanel = () => {
     if(!cartPanel){
       setCartPanel(true)
     }else{
      setCartPanel(false)
     }
  }



  


  return (

     <>
     
     <NavegationContainer openCartPanel={openCartPanel} cartPanel={cartPanel}/>
     
     <Routes>
       <Route path="/" element={<ContainerUI seeProduct={seeProduct}/>} />
       <Route path="/description/:name"  element={<DescriptionOneProduct descriptionProduct={descriptionProduct} />}/>
     </Routes>

  
     
     </>
  );
}

export default App;
