import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'

function Profile() {
  const [tabNo,setTabNo] = useState(1)
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
    <>
    <Header/>
    <div style={{height:'200px'}} className='bg-black' >
    </div>
     <div style={{width:'230px',height:'230px',borderRadius:'50%', marginLeft:'70px',marginTop:'-130px' }} className='bg-white'>
        <img style={{width:'200px',height:'200px',borderRadius:'75%', marginLeft:'15px',paddingTop:'20px'}} src={dp?dp:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"} alt="profile" />
      </div>
      <div className="md:flex justify-between md:px-20 px-2 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">{username}</h1>
          <FaCircleCheck className='text-blue-400 ms-3'/>
        </div>
        <Edit/>
      </div>
      <p className='text-justify md:px-20 px-5 my-5'>
        Reading has always been a big part of my life, and Book Store gives me the perfect place to explore new titles and pass on the books I’ve finished. Whether I’m buying, selling, or browsing, the platform helps me stay connected with a community that shares the same passion for stories and learning.</p>
    <div className="md:px-40">
      {/* tabs */}
      <div className="flex justify-center items-center my-8 font-medium text-lg">
        <p onClick={()=>setTabNo(1)} className={tabNo==1?' p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':' p-4 border-gray-200 border-b rounded cursor-pointer'}>Sell Books</p>
        <p onClick={()=>setTabNo(2)} className={tabNo==2?' p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':' p-4 border-gray-200 border-b rounded cursor-pointer'}>Book Status</p>
        <p onClick={()=>setTabNo(3)} className={tabNo==3?' p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':' p-4 border-gray-200 border-b rounded cursor-pointer'}>Purchase History</p>
      </div>
      {/* contents */}
      {
        tabNo==1 &&
        <div>
          <SellBook/>
        </div>
      }
      {
        tabNo==2 &&
        <div><BookStatus/></div>
      }
      {
        tabNo==3 &&
        <div><Purchase/></div>
      }
      
      
    </div>
    <Footer/>
    </>
  )
}

export default Profile