import React from "react";
import { useCategories } from "../../Hooks/useCategories";
import { useSearch } from "../../Hooks/useSearch";
import { useTotalProducts } from "../../Hooks/useTotalProducts";
import Logo from "../BLogoUI/Logo";
import Bowls from "../CategoriesProducts/Bowls";
import Platos from "../CategoriesProducts/Platos";
import Tazas from "../CategoriesProducts/Tazas";
import Search from "../CSearchUI/Search";
import ProductsUI from "../EProductsUI/ProductsUI";
import "./ContainerUI.css";

const ContainerUI = ({
  seeProduct,
  categories,
}) => {
  const [items] = useTotalProducts();
  const { search, setSearch, newBazar } = useSearch();

  const { platos, tazas, bowls, handleBowls, handlePlatos, handleTazas } =
    useCategories();

  const serchPlatos = items.filter((obj) => obj.name.includes("Plato"));
  const serchTaza = items.filter((obj) => obj.name.includes("Taza"));
  const serchBowls = items.filter((obj) => obj.name.includes("Bowl"));

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Logo />
      <Search
        search={search}
        handleSearch={handleSearch}
        categories={categories}
        handleBowls={handleBowls}
        handlePlatos={handlePlatos}
        handleTazas={handleTazas}
        platos={platos}
        tazas={tazas}
        bowls={bowls}
      />
      <main className="main">
        {!platos && !tazas && !bowls && (
          <section className="section_product_continer_ui">
            {newBazar.map((el) => (
              <ProductsUI
                key={el.id}
                image={el.image}
                name={el.name}
                price={el.price}
                seeProduct={seeProduct}
                el={el}
                size={el.size}
              />
            ))}
          </section>
        )}

        {platos && !tazas && !bowls && (
          <section className="section_product_continer_ui">
            {serchPlatos.map((el) => (
              <Platos
                key={el.id}
                image={el.image}
                name={el.name}
                price={el.price}
                seeProduct={seeProduct}
                el={el}
                size={el.size}
              />
            ))}
          </section>
        )}

        {tazas && !platos && !bowls && (
          <section className="section_product_continer_ui">
            {serchTaza.map((el) => (
              <Tazas
                key={el.id}
                image={el.image}
                name={el.name}
                price={el.price}
                seeProduct={seeProduct}
                el={el}
                size={el.size}
              />
            ))}
          </section>
        )}

        {bowls && !platos && !tazas && (
          <section className="section_product_continer_ui">
            {serchBowls.map((el) => (
              <Bowls
                key={el.id}
                image={el.image}
                name={el.name}
                price={el.price}
                seeProduct={seeProduct}
                el={el}
                size={el.size}
              />
            ))}
          </section>
        )}
      </main>
    </>
  );
};

export default ContainerUI;
