import React, { useContext } from 'react'
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { routeGuardContext } from '../../contextAPI/AuthContext';

function AdminHeader() {
  const {role,authorisedUser,setAuthorisedUser} = useContext(routeGuardContext)
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }
  return (
    <>
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* logo */}
        <div className="flex items-center">
          <img width={'50px'} src="https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg?semt=ais_hybrid&w=740&q=80" alt="logo" />
          <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
        </div>
        {/* logout */}
        <button onClick={logout} className="bg-black px-3 py-2 text-white rounded hover:border hover:text-black hover:bg-white flex items-center">LOGOUT <IoIosLogOut className='ms-1' /></button>
      </div>
      {/* marquue */}
        <div className="w-full p-3 bg-black text-white">
          <marquee >Welcome Admin, Your all set to manage and monitor the system. Let's get into work !!! </marquee>
        </div>
    </>
  )
}

export default AdminHeader