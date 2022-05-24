import React, { useState } from 'react'

export const useCount = () => {
      const [count, setCount] = useState(0);

      const addCount = () => {
        setCount(count + 1);
      };
    
      const deleteCount = () => {
        if (count > 0) {
          setCount(count - 1);
        } else {
          setCount(count);
        }
      };
    
      
  return {
      count,
      addCount,
      deleteCount,
      setCount
}

}