import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import Home from '../pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Components/Profile'
import ProfilePage from '../pages/home/ProfilePage'
import AppointmentForm from '../components/AppointmentForm'

const Index = () => {
  const links = [
    {
      path:'/',
      page:Home
    },
    {
      path:'/sign-up',
      page:SignUp
    },
    {
      path:'/sign-in',
      page:SignIn
    },
    {
      path:'/profile',
      page:ProfilePage
    },
    {
      path:'/profile/appointment',
      page:AppointmentForm
    }
  ]
  return (
    <>
      <Routes>
        { 
          links.map((link, idx) => (
            <Route key={idx} path ={link.path} element={<link.page/>} />
          ))
        }
      </Routes>
    </>
  )
}

export default Index
