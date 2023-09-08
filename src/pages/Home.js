import React from 'react'
import Products from '../Componenes/Products'
import Data from '../Data'
import { useState } from 'react'
import Producte from '../Componenes/Producte'

const Home = () => {
  const [value,setvalue] = useState(Data)
 // console.log(value)
  return (
   <div>
   <Products value ={value}/>

   </div>
  )
}

export default Home