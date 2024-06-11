import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import NavTab from './components/navTabs'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <NavTab/>   

      </BrowserRouter>
    </>
  )
}

export default App
