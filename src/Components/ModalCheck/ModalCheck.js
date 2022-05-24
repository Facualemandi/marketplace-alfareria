import React from 'react'
import ReactDOM from "react-dom";


const ModalCheck = ({children}) => {
  return ReactDOM.createPortal(
        children,
        document.getElementById('modalCheck')

  )
}

export default ModalCheck