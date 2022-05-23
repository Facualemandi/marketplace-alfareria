import React from 'react'
import './AddCartProduct.css'
import { GrFormAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';

const AddCartProduct = () => {
  return (
      <>
        <section className='container_buttons_add'>
            <section >
               <button><AiOutlineMinus/></button>
               <span>0</span>
               <button><GrFormAdd/></button>
            </section>

            <section>
               <button>Add to Cart<BsCartPlus className='cart_plus'/></button>      
            </section>       
        </section>
      </>
  )
}

export default AddCartProduct