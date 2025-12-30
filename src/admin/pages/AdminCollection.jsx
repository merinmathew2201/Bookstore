import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { getAllAdminBooksAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'


function AdminCollection() {
  const [tab,settab] = useState(1)
  const [allBooks,setAllBooks] = useState([])
  const [allUsers,setAllUsers] = useState([])

  console.log(allBooks);
  
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      if(tab==1){
        getAllBooks(token)
      }else{
        getAllUsers(token)
      }
    }
  },[tab])

  const getAllBooks = async (token)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await getAllAdminBooksAPI(reqHeader)
    if(result.status == 200){
      setAllBooks(result.data)
    }else{
      console.log(result);
    }
  }

  const getAllUsers = async (token)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await getAllUsersAPI(reqHeader)
    if(result.status == 200){
      setAllUsers(result.data)
    }else{
      console.log(result);
    }
  }

  const updateBookStatus = async (bookId)=>{
    const token = sessionStorage.getItem('token')
    if(token){
      const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await updateBookStatusAPI(bookId,reqHeader)
    if(result.status == 200){
      toast.success("Book Approved!!!!")
      getAllBooks(token)
    }
    }
  }

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
            {
            allBooks?.length>0?
              allBooks?.map(book=>(
                <div key={book?._id} className="shadow rounded p-3 m-6 md:my-0">
                  <img width={'100%'} height={'300px'} src={book?.imageURL} alt="book" />
                  <div className='flex flex-col justify-center items-center mt-4'>
                    <h3 className='text-xl text-blue-700 font-bold'>{book?.author}</h3>
                    <p className='text-lg'>{book?.title}</p>
                    <p>$ {book?.discountPrice}</p>
                    {book?.status!="approved"?
                    <button onClick={()=>updateBookStatus(book?._id)} className="bg-green-600 text-white p-2 mt-2">APPROVE</button>
                  :
                  <img width={'50px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/960px-Sign-check-icon.png" alt="checkmark" />
                  }
                  
                  </div>
                </div>
              ))
            :
            <p>Loading....</p>}
        </div>
        }
          
        {
          tab==2 && 
          <div className='md:grid grid-cols-3 w-full my-5'>
            {allUsers?.length>0?
              allUsers?.map(user=>(
                <div key={user?._id} className="rounded bg-gray-200 p-2 m-5">
                  <p className='text-red-600 font-bold text-md'>ID:{user?._id}</p>
                  <div className="flex items-center mt-3">
                    {
                      user?.picture?
                      <img style={{width:'80px', height:'80px',borderRadius:'50%'}} src={user?.picture.startsWith("https://lh3.googleusercontent.com/")?user?.picture:`${serverURL}/uploads/${user?.picture}`} alt="profile" />
                      :
                      <img style={{width:'80px', height:'80px',borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
                    }
                    <div className="flex flex-col ml-3 w-full">
                      <h4 className="text-blue-600 font-bold text-lg">{user?.username}</h4>
                      <p>{user?.email}</p>
                    </div>

                  </div>
                </div>
              ))
            :
            <p>Loading....</p>}
          </div>
        }
      </div>
      <ToastContainer position='top-center' autoClose={3000} theme='colored'/>
    </div>
    <Footer/>
    </>
  )
}

export default AdminCollection