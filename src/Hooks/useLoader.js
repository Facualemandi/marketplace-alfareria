import React, { useState } from 'react'

export const useLoader = () => {
    const [loader, setLoader] = useState(true);

    function loaderFalse() {
        setTimeout(() => {
          setLoader(false);
        }, 1500);
      }
      loaderFalse();


  return {loader}
}
