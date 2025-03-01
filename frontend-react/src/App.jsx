import { useState } from 'react'
import './assets/css/style.css'

import Main from './components/Main'
import RegisterUser from './components/RegisterUser'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthProvider from './AuthProvider'

function App() {
  

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register-user' element={<RegisterUser />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
