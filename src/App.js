import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Nav from './Components/Nav';
import Fournotfour from './Pages/Fournotfour';
import Team from './Pages/Team';
import Company from './Pages/Company';
import Protected from './Pages/Protected';
import Post from './Pages/Post';
import Products from './Pages/Products';
import Contacts from './Pages/Contacts';
function App() {
  return (
    <>
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path="Team" element={<Team />} />
          <Route path="Company" element={<Company/>} />
      <Route path='*' element={<Fournotfour/>}></Route>
      <Route path="Protected" element={<Protected />} />
      <Route path="Post" element={<Post/>} />
      <Route path="Products" element={<Products />} />
<Route path="/Contacts" element={<Contacts />} />
      </Routes>
   </BrowserRouter>
    </>
    
  )
}

export default App