import React, { useEffect, useState } from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import serverURL from '../../services/serverURL'

function AdminSidebar() {
  const [username,setUsername] = useState("")
  const [dp,setDp] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUsername(user?.username)
      setDp(user?.picture)
    }
  },[])
  return (
    <div className='bg-blue-200 md:min-h-screen h-fit  py-10'>
      {/* image */}
      <div className="flex justify-center">
        <img style={{width:'100px', height:'100px',borderRadius:'50%'}} src={dp==""?"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80":dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`} alt="profile" />
      </div>
      {/* name */}
      <h1 className="text-xl font-bold my-5 text-center">{username}</h1>
      {/* nav links */}
      <div className="mt-10 flex justify-center items-center flex-col">
        <div className="mt-3">
          <Link to={'/admin/home'} className='flex items-center'><FaChartSimple className='me-1'/> Dashboard</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/collections'} className='flex items-center'><FaDatabase className='me-1'/> Collections</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/profile'} className='flex items-center'><FaGear className='me-1'/>Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar