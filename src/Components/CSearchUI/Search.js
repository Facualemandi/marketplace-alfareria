import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

const Search = ({
  search,
  handleSearch,
  handleBowls,
  handlePlatos,
  handleTazas,
  platos,
  tazas,
  bowls,
}) => {
  return (
    <>
      <section className="container_search">
        <section className="section_search">
          <input
            className="input_dark_mode"
            type={"text"}
            placeholder="Tazas, Plato, Bowls...etc"
            value={search}
            onChange={handleSearch}
          />
          <BsSearch />
        </section>
      </section>

      <ul className={`categories`}>
        <li onClick={handlePlatos} className={`${platos && "platos_active"}`}>
          Platos
        </li>
        <li onClick={handleTazas} className={`${tazas && "tazas_active"}`}>
          Tazas
        </li>
        <li onClick={handleBowls} className={`${bowls && "bowls_active"}`}>
          Bowls
        </li>
      </ul>
    </>
  );
};

export default Search;
