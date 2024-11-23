import { useState } from 'react'
import Home from './page/Home'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ButtonWhatsapp from './components/ButtonWhatsapp'

function App() {

  return (
    <>
    <Header/>
      <ButtonWhatsapp/>
      <Home/>
    <Footer/>
    </>
  )
}

export default App
