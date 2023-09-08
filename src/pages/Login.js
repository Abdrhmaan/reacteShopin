import React from 'react'
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <div className='signup'>
    <h1>Login ...!</h1>
    <div className='signu-form'>
        <div>
            <label>Email</label>
            <input type='tex' placeholder='name'></input>
        </div>
        <div>
            <label>Pssword</label>
            <input type='tex' placeholder='name'></input>
        </div>
      
        <Button variant="primary">Primary</Button>
       
    </div>

  </div>
  )
}

export default Login