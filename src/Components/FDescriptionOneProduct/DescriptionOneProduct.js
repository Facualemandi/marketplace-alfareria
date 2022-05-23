import React from 'react'
import './DescriptionOneProduct.css'

const DescriptionOneProduct = ({descriptionProduct}) => {
  
  return (
      <>
       <h1> Facundo</h1>
       <p>{descriptionProduct.name}</p>
      </>
  )
}

export default DescriptionOneProduct