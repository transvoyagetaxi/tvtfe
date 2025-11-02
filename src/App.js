
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import QuickBookModal from './components/QuickBookModal'
import About from './pages/About'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import './styles.css'

const App = () => {
  const [bookingOpen, setBookingOpen] = useState(false)
  const openBooking = () => setBookingOpen(true)
  const closeBooking = () => setBookingOpen(false)

  return (
    <BrowserRouter>
      <div>
        <NavBar openBooking={openBooking} />
        <main>
          <Routes>
            <Route path="/" element={<Home openBooking={openBooking} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <QuickBookModal open={bookingOpen} onClose={closeBooking} />
      </div>
    </BrowserRouter>
  )
}

export default App
