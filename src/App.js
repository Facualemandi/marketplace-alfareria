import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContainerUI from "./Components/AContainerUI/ContainerUI";
import Search from "./Components/CSearchUI/Search";
import DescriptionOneProduct from "./Components/FDescriptionOneProduct/DescriptionOneProduct";

function App() {

  const [descriptionProduct, setDescriptionProduct] = useState([])

  const seeProduct = (el) => {
    setDescriptionProduct(el)
  }


  


  return (

     <>

     <Routes>
       <Route path="/" element={<ContainerUI seeProduct={seeProduct}/>} />
       <Route path="/description/:name"  element={<DescriptionOneProduct descriptionProduct={descriptionProduct} />}/>
     </Routes>

  
     
     </>
  );
}

export default App;
