import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div className="grid grid-cols-3 p-3">
      {/* logo */}
      <div className='flex items-center'>
        <img width={'50px'} src="https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg?semt=ais_hybrid&w=740&q=80" alt="logo" />
        <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOKSTORE</h1>
      </div>
      {/* title */}
      <div className="md:flex justify-center items-center hidden">
        <h1 className="text-3xl font-bold">BOOK STORE</h1>
      </div>
      {/* login */}
      <div className="md:flex justify-end items-center hidden">
        <FaInstagram className='me-1' />
        <FaFacebookSquare className='me-1'/>
        <FaXTwitter className='me-1' />
        <Link to={'/login'} className='border border-black rounded px-3 py-1 ms-3 flex items-center hover:bg-black hover:text-white'>< FaCircleUser className='me-1' /> Login</Link>
      </div>
    </div>
    </>
  )
}

export default Header