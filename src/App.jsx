import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Header from './components/header'
import Body from './components/body'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Body/>
      </BrowserRouter>
    </>
  )
}

export default App
