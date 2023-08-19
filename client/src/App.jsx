import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import PinMap from './pages/PinMap/PinMap'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<PinMap />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
