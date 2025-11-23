import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    {/* landing */}
    <div style={{height:'600px'}} className='flex flex-col justify-center items-center bg-[url(/bg.avif)] bg-cover bg-center text-white '>
    <div style={{height:'600px',backgroundColor:'rgba(0, 0, 0, 0.53)'}} className='w-full flex flex-col justify-center items-center   '>
      <p className='text-5xl font-bold my-2'>Wonderful Gifts</p>
      <p>Gift your family and friends a book</p>
      <div className="mt-9 flex items-center">
        <input type="text" className="bg-white p-3 rounded-3xl w-100 text-black placeholder-grey-500" placeholder='Search A Book'/>
        <FaSearch className='text-gray-500' style={{marginLeft:'-40px'}}/>
      </div>
    </div>


    </div>
    {/* new arrival */}
    <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>New Arrivals</h1>
      <h1 className='text-4xl my-3'>Explore Our Latest Collection</h1>
      <div className="md:grid grid-cols-4 w-full my-10">
        {/* duplicated book card */}
        <div className="shadow rounded p-3 m-4 md:my-0">
          <img width={'100%'} height={'300px'} src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855959.jpg" alt="book" />
          <div className='flex flex-col justify-center items-center mt-4'>
            <h3 className='text-xl text-blue-700 font-bold'>Author</h3>
            <p className='text-lg'>title</p>
            <p>$ 12</p>
          </div>
        </div>
        <div className="shadow rounded p-3 m-4 md:my-0">
          <img width={'100%'} height={'300px'} src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855959.jpg" alt="book" />
          <div className='flex flex-col justify-center items-center mt-4'>
            <h3 className='text-xl text-blue-700 font-bold'>Author</h3>
            <p className='text-lg'>title</p>
            <p>$ 12</p>
          </div>
        </div>
        <div className="shadow rounded p-3  m-4 md:my-0">
          <img width={'100%'} height={'300px'} src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855959.jpg" alt="book" />
          <div className='flex flex-col justify-center items-center mt-4'>
            <h3 className='text-xl text-blue-700 font-bold'>Author</h3>
            <p className='text-lg'>title</p>
            <p>$ 12</p>
          </div>
        </div>
        <div className="shadow rounded p-3  m-4 md:my-0">
          <img width={'100%'} height={'300px'} src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855959.jpg" alt="book" />
          <div className='flex flex-col justify-center items-center mt-4'>
            <h3 className='text-xl text-blue-700 font-bold'>Author</h3>
            <p className='text-lg'>title</p>
            <p>$ 12</p>
          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <Link to={'/books'} className='bg-blue-900 p-3 text-white font-black rounded'> Explore More....</Link>
      </div>

    </section>
    {/* author */}
    <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
      <div className="text-center">
        <h2 className='text-xl font-bold'>FEATURED AUTHORS</h2>
        <h2 className='text-xl'>Captivate with every word</h2>
        <p className='font-bold text-start my-3'>Welcome to our Bookstore</p>
        <p className='text-justify'>Where stories live, imagination thrives, and every reader finds a companion.
        Our shelves are filled with handpicked titles — from timeless classics to fresh new voices — bringing together books that inspire, comfort, challenge, and transform.
        Whether you’re a dedicated book lover or a curious explorer, this is a space made for you. Dive in, discover, and let your next favorite story find you.</p>
        <p className='text-justify my-4'>"Books are quiet storytellers — patient, timeless, and always waiting to share a piece of their world with you. I believe that every book holds a spark, and every reader turns that spark into something uniquely their own. May you find something here that speaks to your heart, warms your spirit, or opens your mind in ways you never expected."</p>
      </div>
      <div className='flex justify-center items-center'>
        <img src="https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg" alt="" />
      </div>
    </section>
    {/* testimony */}
    <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
      <h1 className='text-xl text-center font-bold'>TESTIMONICALS</h1>
      <p className='text-xl'>See What Others are Saying</p>
      <div className="my-5 flex flex-col items-center justify-center">
        <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://i0.wp.com/nik.art/wp-content/uploads/2024/06/4-things-happy-people-dont-do-cover.png?resize=750%2C410&ssl=1" alt="" />
        <h3 className='my-3'>Harshita M</h3>
        <p className='text-justify'>As someone who reads across genres — fiction, self-help, philosophy, and biographies — I often struggle to find a platform that delivers variety without overwhelming me. This bookstore achieves that balance perfectly. The descriptions go beyond simple summaries and actually help you understand the essence of the book. I appreciate the thoughtful curation that clearly prioritizes quality over quantity. You can feel the passion of book lovers behind this project.</p>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home