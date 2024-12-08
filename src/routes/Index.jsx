import React from 'react'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import { Route, Routes } from 'react-router-dom'

const Index = () => {
  const links = [
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
          links.map((link) => (
            <Route path ={link.path} element={<link.page/>} />
          ))
        }
      </Routes>
    </>
  )
}

export default Index
