import React, { useState } from 'react'
import { useTotalProducts } from './useTotalProducts'

export const useSearch = () => {
     const [search, setSearch] = useState('')
     const[items, setItems] = useTotalProducts()

    let newBazar = []
    if(search.length < 1){
         newBazar = items
  
    }else{
        newBazar = items.filter(el =>
         el.name.toLowerCase().includes(search.toLocaleLowerCase())
          )
    }


    return  {
        search,
        setSearch,
        newBazar
    }
}
