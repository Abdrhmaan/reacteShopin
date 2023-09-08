import React from 'react'
import Products from '../Componenes/Products'
import Data from '../Data'
import { useState } from 'react'

const Shpo = () => {
  const [value,setvalue] = useState(Data)
  return (
    <Products value ={value}/>
  )
}

export default Shpo