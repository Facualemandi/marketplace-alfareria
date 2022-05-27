import React, { useState } from "react";

export const useCategories = () => {
  const [platos, setPlatos] = useState(false);
  const [tazas, setTazas] = useState(false);
  const [bowls, setBowls] = useState(false);

  const handlePlatos = () => {
    if (!platos) {
      setPlatos(true);
      setTazas(false);
      setBowls(false);
    } else {
      setPlatos(false);
    }
  };
  
  const handleTazas = () => {
    if (!tazas) {
      setTazas(true);
      setPlatos(false);
      setBowls(false);
    } else {
      setTazas(false);
    }
  };
  const handleBowls = () => {
    if (!bowls) {
      setBowls(true);
      setTazas(false);
      setPlatos(false);
    } else {
      setBowls(false);
    }
  };

  return {
    platos,
    tazas,
    bowls,
    handleBowls,
    handlePlatos,
    handleTazas,
  };
};
