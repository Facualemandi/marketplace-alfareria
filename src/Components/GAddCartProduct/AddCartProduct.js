import React, { useState } from 'react'
import './AddCartProduct.css'
import { GrFormAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';

const AddCartProduct = ({ count, addProductCart, addCount, deleteCount, data, onReturn}) => {

   const {id} = data;


  return (
      <>
        <section className='container_buttons_add'>
            <section className='section_btns_add_minus'>
               <button onClick={deleteCount}><AiOutlineMinus /></button>
               <span>{count}</span>
               <button onClick={addCount}><GrFormAdd/></button>
            </section>

            <section>
               <button onClick={() => addProductCart(data, id)}>Add to Cart<BsCartPlus className='cart_plus'/></button>  
              
            </section>  

             <button className='return' onClick={onReturn}> Volver </button>

              
                   
        </section>
      </>
  )
}

export default AddCartProduct