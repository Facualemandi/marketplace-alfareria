import React, { useState } from 'react'
import './AddCartProduct.css'
import { GrFormAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';

const AddCartProduct = () => {

  const [count, setCount] = useState(0)

  const addCount = () => { 
      setCount(count + 1)
    
  }
  const deleteCount = () => { 
     if(count > 1){
       setCount(count - 1)
     }else{
       setCount(count)
     }
  }




  return (
      <>
        <section className='container_buttons_add'>
            <section >
               <button><AiOutlineMinus onClick={addCount}/></button>
               <span>{count}</span>
               <button><GrFormAdd onClick={deleteCount}/></button>
            </section>

            <section>
               <button>Add to Cart<BsCartPlus className='cart_plus'/></button>      
            </section>  

              
                   
        </section>
      </>
  )
}

export default AddCartProduct