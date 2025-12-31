
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'

import Home from './user/pages/Home'
import Books from './user/pages/Books'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'
import View from './user/pages/View'

import AdminCollection from './admin/pages/AdminCollection'
import AdminHome from './admin/pages/AdminHome'
import AdminProfile from './admin/pages/AdminProfile'

import PreLoader from './components/PreLoader'
import { useContext, useState } from 'react'
import PaymentSuccess from './user/pages/PaymentSuccess'
import PaymentError from './user/pages/PaymentError'
import { routeGuardContext } from './contextAPI/AuthContext'

function App() {
  const [loader,setLoader] = useState(true)
  const {role,authorisedUser,setAuthorisedUser} = useContext(routeGuardContext)

  setTimeout(() => {
    setLoader(false)
  }, 6000);
  return (
    <>
      <Routes>
        <Route path='/' element={loader?<PreLoader/>:<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth registerURL={true}/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {role=="user" &&
          <>
          <Route path='/user/profile' element={<Profile/>}/>
          <Route path='/books/:id/view' element={<View/>}/>
          <Route path='/payment-success' element={<PaymentSuccess/>}/>
          <Route path='/payment-error' element={<PaymentError/>}/>
        </>}

        {role=="admin" &&
          <>
          <Route path='/admin/home' element={<AdminHome/>}/>
          <Route path='/admin/collections' element={<AdminCollection/>}/>
          <Route path='/admin/profile' element={<AdminProfile/>}/>
  
        </>}
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
    </>
  )
}

export default App
