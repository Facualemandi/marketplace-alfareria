import React from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Menu from "../DMenuUI/Menu";
import './Search.css'

const Search = ({search, handleSearch, categories}) => {




  return (
    <>
    
      <section className="container_search">
        <section className="section_search">
          <input type={"text"} placeholder="Tazas, Plato, Bowls...etc" value={search} onChange={handleSearch}/>
           <BsSearch/>
        </section>
           
           <section>
                <Menu/>
           </section>
        
      </section>

       <ul className="categories">
         <li >Platos</li>
         <li>Tazas</li>
         <li>Bowls</li>
       </ul>

    </>
  );
};

export default Search;
