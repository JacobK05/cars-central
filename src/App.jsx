import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Header from './components/header'
import Body from './components/body'
import About from './pages/about'
import Service from './pages/services'
import Contact from './pages/contact'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes> 
            <Route exact path='/' element={<Body/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/service' element={<Service/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
