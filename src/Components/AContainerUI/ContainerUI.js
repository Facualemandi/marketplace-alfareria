import React, { useState } from "react";
import { useSearch } from "../../Hooks/useSearch";
import { useTotalProducts } from "../../Hooks/useTotalProducts";
import Logo from "../BLogoUI/Logo";
import Search from "../CSearchUI/Search";
import ProductsUI from "../EProductsUI/ProductsUI";
import "./ContainerUI.css";

const ContainerUI = ({seeProduct, categories}) => {
  const [items] = useTotalProducts();
  const {  search,  setSearch, newBazar } = useSearch()
  


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };


  return (
    <>
      <Logo />
      <Search search={search} handleSearch={handleSearch} categories={categories}/>

      <main className="main">
        {newBazar.map((el) => (
          <ProductsUI
            key={el.id}
            image={el.image}
            name={el.name}
            price={el.price}
            seeProduct={seeProduct}
            el={el}
          />
        ))}
      </main>
    </>
  );
};

export default ContainerUI;
