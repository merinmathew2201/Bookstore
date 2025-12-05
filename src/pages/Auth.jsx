import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

function Auth({registerURL}) {
  // view password as text and as pswd when clicked on it
  const [viewPassword,setViewPassword] = useState(false)

  const [userDetails,setUserDetails] = useState({
    username:"",email:"",password:""
  })

  const [invalidUserName,setInvalidUserName] = useState(false)
  const [invalidEmail,setInvalidEmail] = useState(false)
  const [invalidPassword,setInvalidPassword] = useState(false)

  const validateInput = (inputTag)=>{
    const{name,value} = inputTag
    // console.log(name,value);
    if(name == "username"){
      setUserDetails({...userDetails,username:value})
      if(!!value.match(/^[a-zA-Z ]{3,16}$/)){
        setInvalidUserName(false)
      }else{
        setInvalidUserName(true)
      }
      
    }
    if(name == "email"){
      setUserDetails({...userDetails,email:value})
      if(!!value.match(/^[^@]+@[^@]+\.[^@]+$/)){
        setInvalidEmail(false)
      }else{
        setInvalidEmail(true)
      }
    }
    if(name == "password"){
      setUserDetails({...userDetails,password:value})
      if(!!value.match(/^[A-Za-z0-9]{6,}$/)){
        setInvalidPassword(false)
      }else{
        setInvalidPassword(true)
      }
    }
    
  }

  const handleRegister = (e)=>{
    e.preventDefault()
    const {username,password,email} = userDetails
    if(username && password && email){
      // alert("api call")
    }else{
      toast.warning("Please fill the form completely")
    }

  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/bg.avif)] bg-cover bg-center text-white'>
      <div className="p-10">
        <h1 className="text-center font-bold text-3xl">BOOK STORE</h1>
        <div style={{width:'400px'}} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          {/* user logo */}
          <div style={{width:'100px',height:'100px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
            <FaUser className='text-3xl'/>
          </div>
          {/* form title */}
          <h1 className="text-2xl">{registerURL?"Register":"Login"}</h1>
          {/* form */}
          <form  className="my-5 w-full">
            {/* username - register */}
            {registerURL && 
            <>
            <input onChange={e=>validateInput(e.target)} type="text" name='username' placeholder='Username' className="bg-white p-2 w-full rounded my-5 text-black placeholder-gray-400" />
            {invalidUserName && <div className="mb-5 text-orange-300">*Invalid User Name</div>}
            </>}
            {/* email */}
            <input onChange={e=>validateInput(e.target)}  type="text" name='email' placeholder='E Mail' className="bg-white p-2 w-full rounded mb-5 text-black placeholder-gray-400" />
            {invalidEmail && <div className="mb-5 text-orange-300">*Invalid email</div>}
            {/* password */}
            <div className="flex items-center">
              <input  onChange={e=>validateInput(e.target)} name='password' type={viewPassword? "text":"password"} placeholder='Password' className="bg-white p-2 w-full rounded mb-5 text-black placeholder-gray-400" />
              {
              viewPassword?
              <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400' style={{marginLeft:'-30px',marginTop:'-20px'}}/>
              :
              <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400' style={{marginLeft:'-30px',marginTop:'-20px'}}/>
              }
              
            </div>
            {invalidPassword && <div className="mb-5 text-orange-300">*Invalid password</div>}
            {/* forgot password */}
            {!registerURL && 
            <div className="flex justify-between mb-5">
              <p className='text-xs text-orange-300'>*Never share your password with others</p>
              <button className='text-xs underline'>Forgot Password</button>
            </div>}
            {/* btn for register/login */}
            <div className="text-center">
              {registerURL?
              <button onClick={handleRegister} disabled={invalidEmail||invalidPassword||invalidUserName} className='bg-green-700 p-2 w-full rounded'>Register</button>
              :
              <button disabled={invalidEmail||invalidPassword||invalidUserName} className='bg-green-700 p-2 w-full rounded'>Login</button>
              }
              
            </div>
            {/* google authentication */}
            <div className="my-5 text-center">
              {
                registerURL?
                <p className="text-blue-500">Already a user?<Link to={'/login'} className='underline ms-3'>Login</Link></p>
                :
                <p className="text-blue-500">New user?<Link to={'/register'} className='underline ms-3'>Register</Link></p>
              }
            </div>
          </form>
          
        </div>
      </div>
      <ToastContainer position='top-center' autoClose={3000} theme='colored'/>
    </div>
  )
}

export default Auth