import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, ScrollRestoration } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss'

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import PinMap from './pages/PinMap/PinMap'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  })
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        {loading ? (
          <div className="loading">
            Loading...
          </div>
        ) : (
          <Routes>
            <ScrollRestoration />
            <Route path='/' element={<Home />} />
            <Route path='/map' element={<PinMap />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        )}
        <ToastContainer />
      </main>
    </BrowserRouter>
  )
}

export default App
