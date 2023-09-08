import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Signup = () => {


  

    function handlechange(evente){
        
        const newdata = {...form , [evente.target.name] : evente.target.value}
        console.log(newdata)
    }

   
    const [form ,setform] = useState({
        text :'',    
        secondname :'',
        email : "",
        pssword :  "",

        
    }) 

    function handlesubmit(event) {
        event.preventDefault()
        console.log(form)


        
    }
  return (
  <div className='signup'>
    
    <h1>Sign Up</h1>
    <form onSubmit={handlesubmit}>
    <div className='signu-form'>
  
        <div>
            <label>First NAME</label>
            <input type='tex' placeholder='name' name='text' value={form.text} onChange={handlechange}></input>
        </div>
        <div>
            <label>Second Name</label>
            <input type='tex' placeholder='name' name='secondname'   value={form.secondname} onChange={handlechange}></input>
        </div>
        <div>
            <label>Email</label>
            <input type='email' placeholder='name' name='email'  value={form.email}  onChange={handlechange}></input>
        </div>
        <div>
            <label>Pssword</label>
            <input type='password' placeholder='name' name='pssword'  value={form.pssword}  onChange={handlechange}></input>
        </div>
        <Button variant="primary" type='submit' >SUBMIT</Button>
      
    </div>
    </form>
 <Link to="/login" className='a' >Create Acoont</Link>
  </div>

  )
}

export default Signup