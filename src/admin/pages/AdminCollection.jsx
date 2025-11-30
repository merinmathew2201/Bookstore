import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminCollection() {
  const [tab,settab] = useState(1)
  return (
    <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5'>
      <div className="col-span-1">
        <AdminSidebar/>
      </div>
      <div className="col-span-4">
        <h1 className="text-center font-bold my-5 text-3xl">All Resources</h1>
        <div className="flex justify-center font-semibold mb-5">
          <p onClick={()=>settab(1)} className={tab==1?'text-blue-600 border-gray-300 p-2 border-t border-l border-r cursor-pointer':'text-blue-600 border-gray-300 p-2 border-b cursor-pointer'}>Books</p>
          <p onClick={()=>settab(2)} className={tab==2?'text-blue-600 border-gray-300 p-2 border-t border-l border-r cursor-pointer':'text-blue-600 border-gray-300 p-2 border-b cursor-pointer'}>Users</p>
        </div>
        {tab==1 &&
        <div className='md:grid grid-cols-4 w-full my-5'>
            {/* duplicated book card */}
            <div className="shadow rounded p-3 m-6 md:my-0">
              <img width={'100%'} height={'300px'} src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855959.jpg" alt="book" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h3 className='text-xl text-blue-700 font-bold'>Author</h3>
                <p className='text-lg'>title</p>
                <p>$ 12</p>
                <button className="bg-green-600 text-white p-2 mt-2">APPROVE</button>
              </div>
            </div>
        </div>
        }
          
        {
          tab==2 && 
          <div className='md:grid grid-cols-3 w-full my-5'>
            <div className="rounded bg-gray-200 p-2 m-5">
              <p className='text-red-600 font-bold text-md'>ID:</p>
              <div className="flex items-center mt-3">
                <img style={{width:'80px', height:'80px',borderRadius:'50%'}} src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
                <div className="flex flex-col ml-3 w-full">
                  <h4 className="text-blue-600 font-bold text-lg">username</h4>
                  <p>email</p>
                </div>

              </div>
            </div>
          </div>
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminCollection