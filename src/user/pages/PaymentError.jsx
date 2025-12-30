import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PaymentError() {
  return (
    <>
    <Header/>
    <div className='container my-10 min-h-screen flex justify-center items-center'>
        <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
            <div>
                <h1 className="text-red-500 md:text-4xl">Sorry!!! Your Payment is Unsuccessfull!!!</h1>
                <p className='text-2xl my-10'>We Apologize for the inconvience you have caused and Appreciate your visit to BookStore...</p>
                <div className='flex items-center'><Link to={'/books'} className='flex items-center text-white p-2 font-bold bg-red-700'><FaBackward className='me-2'/>Explore More Books!!!</Link></div>
            </div>
            <div className='flex justify-center items-center'>
                <img width={'200px'} src="https://i.pinimg.com/originals/52/cd/db/52cddb4d267e3c3c3637f2abaf61aa5d.gif" alt="payment success" />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentError