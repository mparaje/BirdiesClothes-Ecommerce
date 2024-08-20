import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='contenedor-app'>
      <Navbar />
      <ItemListContainer gretting = {"Bienvenidos a Birdies Clothes!"}/>
    </div>
  )
}

export default App
