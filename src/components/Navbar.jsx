import { Link, useNavigate } from "react-router-dom"
import HeroSection from "./HeroSection"
import LogoutLogo from '../assets/logout logo.png'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    setShowLogoutModal(false)
    navigate('/sign-in')
  }

  const cancelLogout = () => {
    setShowLogoutModal(false)
  }

  const handleAdminLogin = () => {
    navigate('/admin-login')
  }

  return (
    <div className={"bg-[url('bg.png')] w-screen h-screen relative"}>
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                No, Stay
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-[#8051C6] text-white rounded hover:bg-[#6a43a8] transition-colors"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="text-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blood Donation</span>
          </a>
          <div className="flex items-center md:order-2 space-x- md:space-x-6 rtl:space-x-reverse">
            <div className="flex gap-2 items-center">
              <button 
                onClick={handleAdminLogin}
                className="hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <span>Jamshaid</span>
              </button>
              <button 
                onClick={handleLogout}
                className="hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                {/* <img src={LogoutLogo} alt="Logout" className="w-5 h-5" /> */}
                <span>Logout</span>
              </button>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium text-white p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/profile?tab=Appointment" className="block py-2 px-3 text-white text-sm hover:text-gray-300 transition-colors" aria-current="page">Appointment Scheduling</Link>
              </li>
              <li>
                <Link to="/profile?tab=Inventory" className="block py-2 px-3 text-sm hover:text-gray-300 transition-colors">Inventory</Link>
              </li>
              <li>
                <Link to="/profile?tab=Eligibility Criteria" className="block py-2 px-3 text-sm hover:text-gray-300 transition-colors">Eligibility Criteria</Link>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-sm hover:text-gray-300 transition-colors">Find Us on Map</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-sm hover:text-gray-300 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <HeroSection/>
    </div>
  )
}

export default Navbar
