import React, { useState } from 'react'
import './AddCartProduct.css'
import { GrFormAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import { useTotalProducts } from '../../Hooks/useTotalProducts';
import OthersProducts from '../OthersProducts/OthersProducts';

const AddCartProduct = ({ count, addProductCart, addCount, deleteCount, data, onReturn}) => {

   const [items,itemTwo] = useTotalProducts()

  const isItemTwo = Object.values(itemTwo)

   

   const itemsasd =() => {
     console.log(isItemTwo)
   }
  
  console.log(data)
  return (
      <>
        <section className='container_buttons_add'>
            <section className='section_btns_add_minus'>
               <button onClick={deleteCount}><AiOutlineMinus /></button>
               <span>{count}</span>
               <button onClick={addCount}><GrFormAdd/></button>
            </section>

            <section>
               <button onClick={() => addProductCart(data, count)}>Add to Cart<BsCartPlus className='cart_plus'/></button>  
              
            </section>  



          <p className='other_products_cart'> Otros productos... </p>
            <section className='deslize'>
                {isItemTwo.map(el => (
              
                    <OthersProducts
                    name={el.name}
                    price={el.price}
                    image ={el.image}
                    />
           
                
                ))}
                <p onClick={itemsasd}>  HOLA </p>

            </section>


         


             <button className='return' onClick={onReturn}> Volver </button>
              
                   
        </section>
      </>
  )
}

export default AddCartProduct