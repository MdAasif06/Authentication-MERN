import React from 'react'
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import EmailVerify from "./pages/EmailVerify.jsx"
import ResetPassword from "./pages/ResetPassword.jsx"
import {Route,Routes} from 'react-router-dom'
  import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/email-verify' element={<EmailVerify/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      
    </Routes>
    </div>
    
  )
}

export default App