import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='flex justify-center items-center flex-col my-10'>
      <img width={'350px'} src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="page not found" />
      <p className='md:text-xl'>Oh No !</p>
      <h1 className='md:text-5xl text-2xl font-medium my-5'>Look Like You're Lost</h1>
      <p className='md:text-xl'>The page you are looking for is not available</p>
      <Link to={'/'} className='p-3 bg-indigo-400 rounded text-white mt-5'>BACK HOME</Link>
    </div>
  )
}

export default Pnf