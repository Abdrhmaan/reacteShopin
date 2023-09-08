import React from 'react'
import { useParams } from 'react-router-dom'


const Producte = (props) => {
 
 //console.log(props)
    const params = useParams()

//  console.log(params)

  const neww = props.data.find((item) => item.id === Number (params.id) )
 //   let newdata = value.findIndex((item) => console.log(item.id))
   console.log(neww)
  return (
   <div className='items'>
    <div className='item'>
        <img className='img-itm' src={neww.imageUrl
}></img>
        
    </div>
    <div className='item-d'>
        <p>{neww.description
}</p>
    </div>
   </div>
 
  )
}

export default Producte