import React from 'react'

function Purchase() {
  return (
     <div className='p-10 my-20 shadow rounded'>
        {/* duplicated book with status updation */}
        <div className="p-5 roundedmt-4 bg-gray-100">
            
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className="px-4">
                    <h1 className="text-2xl">Title</h1>
                    <h2 className="text-xl">author</h2>
                    <h3 className="text-lg text-blue-600">$ price</h3>
                    <p className="text-justify">abstract</p>
                    <div className="flex mt-3">
                        <img style={{width:'100px',height:'80px',borderRadius:'50%'}} src="https://thumbs.dreamstime.com/b/purchase-stamp-round-sign-label-transparent-background-352589731.jpg" alt="purchase" />
                    </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                    <img className='w-full' src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855959.jpg" alt="book" />
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Purchase