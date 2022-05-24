import React, { useState } from 'react'
import './AddCartProduct.css'
import { GrFormAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';

const AddCartProduct = ({ count, addProductCart, addCount, deleteCount, data}) => {

  
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

              
                   
        </section>
      </>
  )
}

export default AddCartProduct