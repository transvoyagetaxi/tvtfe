import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeliveryModal from './components/DeliveryModal'
import DriveModal from './components/DriveModal'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'
import NavBar from './components/NavBar'
import QuickBookModal from './components/QuickBookModal'
import About from './pages/About'
import DrivePage from './pages/DrivePage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ServicesPage from './pages/ServicesPage'
import './styles.css'

const App = () => {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [deliveryOpen, setDeliveryOpen] = useState(false)
  const [driveOpen, setDriveOpen] = useState(false)
  const openBooking = () => setBookingOpen(true)
  const closeBooking = () => setBookingOpen(false)
  const openDelivery = () => setDeliveryOpen(true)
  const closeDelivery = () => setDeliveryOpen(false)
  const openDrive = () => setDriveOpen(true)
  const closeDrive = () => setDriveOpen(false)

  return (
    <BrowserRouter>
      <div>
        <NavBar openBooking={openBooking} />
        <main>
          <Routes>
            <Route path="/" element={<Home openBooking={openBooking} />} />
            <Route path="/services" element={<ServicesPage openBooking={openBooking} openDelivery={openDelivery} />} />
            <Route path="/about" element={<About />} />
            <Route path="/drive" element={<DrivePage openDrive={openDrive} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer openBooking={openBooking} openDrive={openDrive} />
        <MobileBar openBooking={openBooking} />
        <QuickBookModal open={bookingOpen} onClose={closeBooking} />
        <DeliveryModal open={deliveryOpen} onClose={closeDelivery} />
        <DriveModal open={driveOpen} onClose={closeDrive} />
      </div>
    </BrowserRouter>
  )
}

export default App
