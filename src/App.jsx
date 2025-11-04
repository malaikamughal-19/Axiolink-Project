import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import Header from './Compnents/Header'
import Searchbar from './Compnents/Searchbar'
import Products from './Compnents/Products'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Searchbar/>
        <Products/>
      </div>
    </>
  )
}

export default App
