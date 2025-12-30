import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { editUserAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'


function AdminProfile() {
  const navigate = useNavigate()
  const [userDetails,setUserDetails] = useState({
    username:"",password:"",cpassword:"",picture:"",role:"",bio:"",id:""
  })
  const [existingUserPicture,setExitingUserPicture] = useState("")
  const [preview,setPreview] = useState("")
  const [pswdMatch,setPswdMatch] = useState(true)

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({...userDetails,username:user.username,role:user.role,bio:user.bio,id:user._id})
      setExitingUserPicture(user.picture)
    }
  },[])

  const handlePictureUpdate = (e)=>{
    setUserDetails({...userDetails,picture:e.target.files[0]})
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

  const handleResetForm = ()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({username:user.username,role:user.role,bio:user.bio,password:"",cpassword:"",id:user._id})
    setExitingUserPicture(user.picture)
    setPreview("")
    setPswdMatch(true)
  }

  const checkPasswordMatch = (data)=>{
    setUserDetails({...userDetails,cpassword:data})
    userDetails.password == data? setPswdMatch(true):setPswdMatch(false)
  }

  const handleUpdateUser = async ()=>{
      const {username,password,cpassword,bio,id,picture} = userDetails
      if(!username || !password || !cpassword ){
        toast.info("Please fill the form completely")
      }else if(pswdMatch){
        
        const token = sessionStorage.getItem("token")
        if(token){
          const reqHeader = {
            "Authorization" : `Bearer ${token}`
          }
          const reqBody = new FormData()
          for(let key in userDetails){
            if(key != "picture"){
              reqBody.append(key,userDetails[key])
            }else{
              preview? reqBody.append("picture",userDetails.picture) : reqBody.append("picture",existingUserPicture)
            }
          }
          // api call
          const result = await editUserAPI(id,reqBody,reqHeader)
          if(result.status == 200){
            toast.success("Profile Updated Successfully..")
            setTimeout(() => {
              sessionStorage.clear()
              navigate('/login')
            }, 2000);
          }else{
            console.log(result);
            toast.error("Something went wrong!!!")
          }
  
        }
      }else{
        toast.warning("Operation failed!!! Password Mismatch")
      }
    }

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
              <input onChange={e=>handlePictureUpdate(e)} type="file" id='userProfile' hidden />
              {
                existingUserPicture==""?
                <img className='z-52' style={{width:'150px',height:'150px',borderRadius:"70%"}} src={preview?preview:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"} alt="profile picture" />
                :
                existingUserPicture.startsWith("https://lh3.googleusercontent.com/" )?
                <img className='z-52' style={{width:'150px',height:'150px',borderRadius:"70%"}} src={preview?preview:existingUserPicture} alt="profile picture" />
                :
                <img className='z-52' style={{width:'150px',height:'150px',borderRadius:"70%"}} src={preview?preview:`${serverURL}/uploads/${existingUserPicture}`} alt="profile picture" />
              }
              <button className="bg-blue-300 z-53  text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-20px'}}><FaPen/></button>
            </label>
            <div className="mt-10 mb-3 w-full px-5">
              <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})}  type="text" placeholder='Username' className="w-full  bg-white  p-2 rounded" />
            </div>
            <div className=" mb-3 w-full px-5">
              <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New Password' className="w-full  bg-white p-2 rounded" />
            </div>
            <div className=" mb-3 w-full px-5">
              <input value={userDetails.cpassword} onChange={e=>checkPasswordMatch(e.target.value)} type="password" placeholder='Confirm Password' className="w-full  bg-white  p-2 rounded" />
            </div>
            {!pswdMatch && <div className=" mb-3 w-full px-5 text-xs text-red-700 font-bold">
              Confirm Password must be match with new Password
            </div>}
            
            <div className="flex justify-end w-full px-5 mt-5">
              <button onClick={handleResetForm} className="bg-yellow-600 text-white px-3 py-2 rounded">RESET</button>
              <button onClick={handleUpdateUser} className="bg-green-600 ms-5 text-white px-3 py-2 rounded">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer position='top-center' autoClose={3000} theme='colored'/>
    <Footer/>
    </>
  )
}

export default AdminProfile