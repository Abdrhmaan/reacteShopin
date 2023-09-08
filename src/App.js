import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Header from './Componenes/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shpo from './pages/Shpo';
import Register from './pages/Register';
import Login from './pages/Login';
import Producte from './Componenes/Producte';
import Data from './Data';
import { useState } from 'react';






function App() {
  const [xaan,setxaan] = useState(Data)
 // console.log(xaan)
 
 

  
  return (
    <div className='container'>
      <Header/>
    
     <Routes>

     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/shop" element={<Shpo />}></Route>
     <Route path="/shop/:id" element={<Producte data={xaan}/>}></Route>
    
     <Route path="/rigester" element={<Register />}></Route>
     <Route path="/login" element={<Login/>}></Route>
     
     </Routes>
     

    </div>
 

 

 


  )

}

export default App;
