import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminProfile() {
  return (
    <> 
    <AdminHeader/>
    <div className="md:grid grid-cols-5">
      <div className="col-span-1">
        <AdminSidebar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="text-center mb-10 font-bold text-3xl">Settings</h1>
        <div className="md:grid grid-cols-2 items-center">
          <div className='md:pe-10'>
            <h3 className="text-2xl font-bold">Welcome, Admin!</h3>
            <p className='text-xl my-5 text-justify'>This is your dedicated dashboard where you oversee and manage the core activities of BookStore. As an admin, you have the authority to review, verify, and approve the books uploaded by users, ensuring that every listing meets the platform’s standards for quality and accuracy.</p>
            <p className='text-xl text-justify '>From monitoring user submissions to maintaining the integrity of the marketplace, your role helps create a safe, organized, and seamless experience for both buyers and sellers. Use this space to keep track of book approvals, manage user activity, and ensure the platform runs smoothly. Your contribution is essential in keeping BookStore reliable, user-friendly, and trustworthy for everyone.</p>
          </div>
          <div className="flex justify-center items-center bg-blue-100 p-10 rounded flex-col my-5">
            <label htmlFor="userProfile">
              <input type="file" id='userProfile' hidden />
              <img className='z-52' style={{width:'150px',height:'150px',borderRadius:"70%"}} src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="profile picture" />
              <button className="bg-blue-300 z-53  text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-20px'}}><FaPen/></button>
            </label>
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text" placeholder='Username' className="w-full  bg-white  p-2 rounded" />
            </div>
            <div className=" mb-3 w-full px-5">
              <input type="password" placeholder='New Password' className="w-full  bg-white p-2 rounded" />
            </div>
            <div className=" mb-3 w-full px-5">
              <input type="password" placeholder='Confirm Password' className="w-full  bg-white  p-2 rounded" />
            </div>
            
            <div className="flex justify-end w-full px-5 mt-5">
              <button className="bg-yellow-600 text-white px-3 py-2 rounded">RESET</button>
              <button className="bg-green-600 ms-5 text-white px-3 py-2 rounded">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminProfile