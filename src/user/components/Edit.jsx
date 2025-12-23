import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { editUserAPI } from '../../services/allAPI'


function Edit() {
  const navigate = useNavigate()
  const [offcanvas,setOffcanvas] = useState(false)
  const [userDetails,setUserDetails] = useState({
    username:"",password:"",cpassword:"",picture:"",role:"",bio:"",id:""
  })
  const [existingUserPicture,setExitingUserPicture] = useState("")
  const [preview,setPreview] = useState("")
  const [pswdMatch,setPswdMatch] = useState(true)

  console.log(userDetails);

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
    setUserDetails({username:user.username,role:user.role,bio:user.bio,password:"",cpassword:""})
    setExitingUserPicture(user.picture)
    setPreview("")
  }

  const checkPasswordMatch = (data)=>{
    setUserDetails({...userDetails,cpassword:data})
    userDetails.password == data? setPswdMatch(true):setPswdMatch(false)
  }

  const handleUpdateUser = async ()=>{
    const {username,password,cpassword,bio,id,picture} = userDetails
    if(!username || !password || !cpassword || !bio){
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
            preview? reqBody.append("picture",picture) : reqBody.append("picture",existingUserPicture)
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
    <div>
      <button onClick={()=>setOffcanvas(true)} className="text-blue-600 border rounded p-3 border-blue-600 flex items-center hover:bg-blue-600 hover:text-white"><FaPen className='me-2'/>Edit</button>
      {/* offcanvas */}
      {
        offcanvas &&
        <div>
        <div className="fixed inset-0 bg-gray-500/75 w-full h-full"></div>
        <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
          {/* offcanvas head */}
          <div className="bg-black text-white px-3 py-4 flex justify-between text-2xl">
            <h1>Update User Profile</h1>
            <FaX onClick={()=>setOffcanvas(false)}/>
          </div>
          {/* body */}
          <div className="flex justify-center items-center flex-col my-5">
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
              <button className="bg-blue-300 z-53 fixed text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-20px'}}><FaPen/></button>
            </label>
            <div className="mt-10 mb-3 w-full px-5">
              <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className=" mb-3 w-full px-5">
              <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New Password' className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className=" mb-3 w-full px-5">
              <input value={userDetails.cpassword} onChange={e=>checkPasswordMatch(e.target.value)} type="password" placeholder='Confirm Password' className="w-full border border-gray-300 p-2 rounded" />
            </div>
            {!pswdMatch && <div className=" mb-3 w-full px-5 text-xs text-red-700 font-bold">
              Confirm Password must be match with new Password
            </div>}
            <div className=" mb-3 w-full px-5">
              <textarea value={userDetails.bio} onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} type="text" placeholder=' Bio' className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex justify-end w-full px-5 mt-5">
              <button onClick={handleResetForm} className="bg-yellow-600 text-white px-3 py-2 rounded">RESET</button>
              <button onClick={handleUpdateUser} className="bg-green-600 ms-5 text-white px-3 py-2 rounded">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
      }
      <ToastContainer position='top-center' autoClose={3000} theme='colored'/>
    </div>
  )
}

export default Edit