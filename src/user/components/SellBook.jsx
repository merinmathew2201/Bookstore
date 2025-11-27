import React from 'react'

function SellBook() {
  return (
    <div  className='p-10 my-20 mx-5 bg-gray-200'>
        <h1 className="text-center text-3xl font-medium">Book Details</h1>
        <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className="px-3">
                <div className="mb-3">
                    <input type="text" placeholder='Book Title' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Author' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='No. of Pages' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Book Image URL' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Orginal Price' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Discount Price' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <textarea rows={4} type="text" placeholder='Abstract' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
            </div>
             <div className="px-3">
                <div className="mb-3">
                    <input type="text" placeholder='Publisher' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Language' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='ISBN' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Category' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3 flex justify-center items-center">
                    <label htmlFor='uploadProfile'>
                        <input type="file" id='uploadProfile' hidden/>
                        <img height={'200px'} width={'200px'}  src="https://cdn-icons-png.flaticon.com/512/4725/4725573.png" alt="upload" />
                    </label>
                </div>
            </div>
        </div>
        <div className="p-3 w-full flex md:justify-end justify-center mt-8">
            <button className=" me-3 px-3 py-2 rounded bg-gray-600 text-white hover:bg-white hover:text-gray-600">RESET</button>
            <button className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-white hover:text-blue-600">SUBMIT</button>
        </div>
    </div>
  )
}

export default SellBook