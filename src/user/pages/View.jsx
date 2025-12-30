import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { getSingleBookDetail } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import {loadStripe} from '@stripe/stripe-js'

function View() {

  const [modalStatus,setModalStatus] = useState(false)
  const {id} = useParams()
  const [viewBookDetails,setViewBookDetails] = useState({})

  console.log(viewBookDetails);
  

  useEffect(()=>{
    getViewBookDetails()
  },[])

  const getViewBookDetails = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await getSingleBookDetail(id,reqHeader)
      if(result.status == 200){
        setViewBookDetails(result.data)
      }else{
        console.log(result);
      }
    }

    
  }

  const makePayment = async ()=>{
    const stripe = await loadStripe('pk_test_51Sjz07Abob52Fu02qWgA9zlE79RM8cCDAARYXYl5QYUPGRJfz4KZrdwopbxtuxjr5Fsf6ftHwUdkPHTyBpxU9mPq00txnuPQeM');
    console.log(stripe);
    
  }
  return (
    <>
    <Header/>
    <div className='md:m-10 m-5'>
      <div className="border p-5 shadow border-gray-200">
        <div className="md:grid grid-cols-4 gap-x-10">
          <div className="col-span-1">
            <img className='w-full' src={viewBookDetails?.imageURL} alt="book" />
          </div>
          <div className="col-span-3">
            <div className="flex justify-between mt-5 md:mt-0">
              <h1 className="text-2xl font-bold">{viewBookDetails?.title}</h1>
              <button onClick={()=>setModalStatus(!modalStatus)} className='text-gray-400'><FaEye/></button>
            </div>
            <h3 className="my-5 text-xl text-blue-400">{viewBookDetails?.author}</h3>
            <div className="md:grid grid-cols-3 gap-5my-10">
              <p className="font-bold ">Publisher:{viewBookDetails?.publisher}</p>
              <p className="font-bold ">Language:{viewBookDetails?.language}</p>
              <p className="font-bold ">No. of Pages:{viewBookDetails?.pages}</p>
              <p className="font-bold ">Seller :{viewBookDetails?.sellerMail}</p>
              <p className="font-bold ">Real Price:${viewBookDetails?.price}</p>
              <p className="font-bold ">ISBN:{viewBookDetails?.isbn}</p>
              <p className="font-bold ">Category:{viewBookDetails?.category}</p>
            </div>
            <div className='md:my-10 my-4'>
              <p className='font-bold text-lg'>{viewBookDetails?.abstract}</p>
            </div>
            <div className="flex justify-end">
              <Link to={'/books'} className='bg-blue-900 text-white p-2 rounded flex items-center'><FaBackward className='me-2'/>Back</Link>
              <button onClick={makePayment} className='bg-green-900 text-white p-2 rounded ms-5'>Buy $ {viewBookDetails?.discountPrice} </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {
        modalStatus && 
        <div className='relative z-10 overflow-y-auto' onClick={()=>setModalStatus(!modalStatus)}>
        <div className="bg-gray-500/75 fixed inset-0">
          <div className="flex justify-center items-center min-h-screen scroll-auto">
            <div className="bg-white rounded-2xl md:w-250 w-100">
              {/* modal title */}
              <div className="bg-black flex justify-between items-center text-white p-3">
                <h3>Book Images</h3>
              </div>
              {/* modal body */}
              <div className="relative p-5">
                <p className="text-blue-600 flex items-center"><FaCamera className='me-2'/>Camera click of the book in the hand of seller</p>
                {/* books in row and col */}
              <div className="md:flex flex-wrap my-4 ">
                {viewBookDetails?.uploadImg.length>0 ?
                viewBookDetails?.uploadImg.map((item,index)=>(
                  <img key={index} className='md:w-75 w-25 md:me-2 mb-3 md:mt-0' src={`${serverURL}/uploads/${item}`} alt="book" />
                ))
              :<p className='font-bold text-lg'>No books images are available</p>
              }
              
              </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
      }
    </div>
    <Footer/>
    </>
  )
}

export default View