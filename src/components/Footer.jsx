import React from 'react'
import { FaArrowRight, FaFacebookSquare, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      <div  className='h-[600] md:h-[270] md:grid grid-cols-3 bg-slate-900 p-5 text-white'>
        <div className='m-5'>
          <h1 className='text-xl font-bold mb-4'>ABOUT US</h1>
          <p className='text-justify'>BookStore is a simple and user-friendly platform where anyone can buy and sell books with ease. From discovering new reads to listing your own books, everything is designed to be quick, secure, and hassle-free. Our goal is to keep reading accessible and help every book find a new home while connecting a community of book lovers.</p>
        </div>
        <div className='m-5 md:ms-10'>
          <h1 className='text-xl font-bold mb-4'>NEWS LETTTER</h1>
          <p>Stay updated with our latest trends</p>
          <div className='flex my-5'>
            <input type="text" className="p-2 bg-white border border-gray-200 text-black w-80 placeholder-gray-600" placeholder='Email ID' />
            <button className='p-5  bg-yellow-300 text-white'><FaArrowRight /></button>
          </div>
        </div>

        <div className="m-5 md:ms-10">
          <h1 className='text-xl font-bold mb-4'>FOLLOW US</h1>
          <p className='mb-4'>Let us be social</p>
          <div className='text-xl flex items-center'>
            <FaInstagram className='me-4' />
            <FaFacebookSquare className='me-4'/>
            <FaXTwitter className='me-4' />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <h1 className='p-2  bg-black text-white text-center'>Copyright &copy; 2025 All rights reserved | This website is made with 🤍 by Luminar Technolab</h1>
    </>
  )
}

export default Footer