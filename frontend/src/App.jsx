import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart.jsx'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'
// import ExploreMenu from './components/ExploreMenu/ExploreMenu.jsx'
import Footer from './components/Footer/Footer.jsx'
import AppDownload from './components/AppDownload/AppDownload.jsx'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import Verify from './Pages/Verify/Verify.jsx'
import MyOrders from './Pages/MyOrders/MyOrders.jsx'
import ChatBot from './components/ChatBoat/ChatBot.jsx'

function App() {
  const [showlogin, setShowLogin] = useState(false);


  return (
    <>
    {showlogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/bot' element={<ChatBot />} />

        </Routes>
      </div>
      <AppDownload/>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>

  )
}

export default App
