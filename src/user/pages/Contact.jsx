import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { MdCall } from 'react-icons/md'
import { FaEnvelopeOpenText, FaPaperPlane } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
    <h1 className="text-center text-3xl font-bold my-5">Contacts</h1>
    {/* contact content */}
    <p className="text-center">We’re here to help! </p>
    <p className='md:px-40 px-10 md:text-center text-justify'>Whether you have questions about buying or selling books, need help with your account, or want to share feedback, the BookStore team is always ready to assist you. Our aim is to make your experience smooth, enjoyable, and worry-free. No matter the concern—big or small—feel free to reach out. We’re here to guide you, listen, and ensure you get the best experience while exploring, purchasing, or listing your books.</p>
    {/* adress,phone,mail */}
    <div className="md:grid grid-cols-3 md:px-40 px-10 my-5">
      <div className='flex md:justify-center items-center mb-2 md:mb-0'>
        <div style={{width:'46px',height:'46px',borderRadius:'50%'}} className='bg-gray-300 flex justify-center items-center me-2'><FaLocationDot className='text-2xl' /></div>
        <p>123 Main Street, Apt 4B, Anytown, <br />CA 91234</p>
      </div>
      <div className='flex md:justify-center items-center mb-2 md:mb-0'>
        <div style={{width:'46px',height:'46px',borderRadius:'50%'}} className='bg-gray-300 flex justify-center items-center me-2'><MdCall className='text-2xl' /></div>
        <p>+91 9874561230</p>
      </div>
      <div className='flex md:justify-center items-center mb-2 md:mb-0'>
        <div style={{width:'46px',height:'46px',borderRadius:'50%'}} className='bg-gray-300 flex justify-center items-center me-2'><FaEnvelopeOpenText className='text-2xl' /></div>
        <p>bookstore@gmail.com</p>
      </div>
    </div>
    {/* form and map */}
    <div className="md:grid grid-cols-2 md:px-40 px-10">
      {/* form */}
      <div className='flex justify-center items-center my-3'>
        <div style={{width:'400px'}} className="bg-gray-300  p-5 flex justify-center items-center flex-col my-5 rounded-md">
          <h1 className='font-bold rounded'>Send Message</h1>
          <input type="text" placeholder='Name' className="bg-white p-2 w-full rounded my-5 text-black placeholder-gray-400" />
          <input type="text" placeholder='E Mail' className="bg-white p-2 w-full rounded mb-5 text-black placeholder-gray-400" />
          <textarea type="text" placeholder='Message' rows={'4'} className="bg-white p-2 w-full rounded mb-5 text-black placeholder-gray-400" />
          <button className='bg-indigo-950 text-white p-2 w-full rounded'>Send<FaPaperPlane style={{marginLeft:'200px',marginTop:'-20px'}} /></button>
        </div>
      </div>
      {/* map */}
      <div className='flex justify-center items-center my-3'><iframe className='my-3 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.984172422051!2d76.34009657479382!3d10.018164390088167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1764176207587!5m2!1sen!2sin" width="400" height="380" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Contact