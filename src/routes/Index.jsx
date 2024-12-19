import SignUp from '../pages/auth/SignUp'
import SignIn from '../pages/auth/SignIn'
import Home from '../pages/home/Home'
import { Route, Routes } from 'react-router-dom'

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
