import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'
function PaymentSuccess() {
  return (
    <>
    <Header/>
    <div className='container my-10 min-h-screen flex justify-center items-center'>
        <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
            <div>
                <h1 className="text-blue-500 md:text-4xl">Congratulations!!!</h1>
                <p className='text-2xl my-10'>Thankyou for purchasing with BookStore. Hope you have good time with us....</p>
                <div className='flex items-center'><Link to={'/books'} className='flex items-center text-white p-2 font-bold bg-blue-700'><FaBackward className='me-2'/>Explore More Books!!!</Link></div>
            </div>
            <div className='flex justify-center items-center'>
                <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="payment success" />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentSuccess