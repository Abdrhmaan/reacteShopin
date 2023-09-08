import React from 'react'
import { Link } from 'react-router-dom'

const Products = (props) => {
   console.log(props)
  return (
    <div className='section'>
        <div className='grid'>
        
           
            {props.value.map((item) => {
               
               console.log(item)
               return (

             
                  <Link to={`/shop/${item.id}`}>
                  <div className='item' key={item.id}>
                     
                     <h1>{item.category
}</h1>
 <img className='img' src={item.imageUrl
}></img>
 <span>{item.price}</span>
 <span>{item.description
}</span>

                  </div>
                  </Link>
              

               )  
            })}
         
        </div>
    </div>
  )
}

export default Products