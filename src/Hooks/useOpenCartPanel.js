import React, { useState } from "react";

export const useOpenCartPanel = () => {
  const [cartPanel, setCartPanel] = useState(false);

  const openCartPanel = () => {
    if (!cartPanel) {
      setCartPanel(true);
    } else {
      setCartPanel(false);
    }
  };

  return {
    cartPanel,
    setCartPanel,
    openCartPanel,
  };
};
