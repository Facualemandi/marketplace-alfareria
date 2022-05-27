import React from "react";
import { BsSearch } from "react-icons/bs";
import Menu from "../DMenuUI/Menu";
import "./Search.css";

const Search = ({ search, handleSearch, handleBowls, handlePlatos,handleTazas }) => {


  return (
    <>
      <section className="container_search">
        <section className="section_search">
          <input
            type={"text"}
            placeholder="Tazas, Plato, Bowls...etc"
            value={search}
            onChange={handleSearch}
          />
          <BsSearch />
        </section>

        <section>
          <Menu />
        </section>
      </section>

      <ul className="categories">
        <li onClick={handlePlatos}>Platos</li>
        <li onClick={handleTazas}>Tazas</li>
        <li onClick={handleBowls}>Bowls</li>
      </ul>
    </>
  );
};

export default Search;
