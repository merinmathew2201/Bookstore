import React  from 'react'
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";


function SellBook() {

    const [bookDetails,setBookDetails] = useState({
        title:"",author:"",pages:"",imageURL:"",price:"",discountPrice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadImg:[]
    })
    const [preview,setPreview] = useState("")
    const [previewList,setPreviewList] = useState([])

    console.log(bookDetails);

    const handleBookImageUpload = (e)=>{
        // console.log(e.target.files[0]);
        const file = e.target.files[0]
        const uploadImgArray = bookDetails.uploadImg
        uploadImgArray.push(file)
        setBookDetails({...bookDetails,uploadImg:uploadImgArray})
        const url = URL.createObjectURL(file)
        setPreview(url) 
        const demoPreviewList = previewList
        demoPreviewList.push(url)
        setPreviewList(demoPreviewList)
    }
    
    
  return (
    <div  className='p-10 my-20 mx-5 bg-gray-200'>
        <h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
        <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className="px-3">
                <div className="mb-3">
                    <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder='Book Title' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})}  type="text" placeholder='Author' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.pages} onChange={e=>setBookDetails({...bookDetails,pages:e.target.value})}  type="text" placeholder='No. of Pages' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.imageURL} onChange={e=>setBookDetails({...bookDetails,imageURL:e.target.value})}  type="text" placeholder='Book Image URL' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})}  type="text" placeholder='Orginal Price' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})}  type="text" placeholder='Discount Price' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <textarea value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})}  rows={4} type="text" placeholder='Abstract' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
            </div>
             <div className="px-3">
                <div className="mb-3">
                    <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})}  type="text" placeholder='Publisher' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})}  type="text" placeholder='Language' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})}  type="text" placeholder='ISBN' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})}  type="text" placeholder='Category' className="w-full p-2 rounded bg-white placeholder-gray-400" />
                </div>
                <div className="mb-3 flex justify-center items-center">
                    <label htmlFor='uploadProfile'>
                        <input onChange={e=>handleBookImageUpload(e)} type="file" id='uploadProfile' hidden/>
                        <img height={'200px'} width={'200px'}  src={preview?preview:"https://cdn-icons-png.flaticon.com/512/4725/4725573.png"} alt="upload" />
                    </label>
                </div>
                {preview &&
                    <div className="flex items-center justify-center">
                    {
                        previewList.map((bookImgURL,index)=>(
                            <img width={'70px'} height={'70px'} className="mx-2" src={bookImgURL} alt="book image" />
                        ))
                    }
                    {
                        previewList.length<3 && 
                        <label htmlFor="bookUpload">
                            <input onChange={e=>handleBookImageUpload(e)} type="file"  id="bookUpload"  hidden/>
                            <FaPlusSquare className="text-3xl ms-2"/>
                        </label>
                    }
                </div>}
            </div>
        </div>
        <div className="p-3 w-full flex md:justify-end justify-center mt-8">
            <button className=" me-3 px-3 py-2 rounded bg-gray-600 text-white hover:bg-white hover:text-gray-600">RESET</button>
            <button className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-white hover:text-blue-600">ADD BOOK</button>
        </div>
    </div>
  )
}

export default SellBook