import React, { useEffect, useState } from 'react'

function Purchase() {
    const [allBooks,setAllBooks] = useState([])
    console.log(allBooks);

    useEffect(()=>{
        getAllUserBoughtBooks()
    },[])

    const getAllUserBoughtBooks = async ()=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization" : `Bearer ${token}`
            }
            const result = await getAllUserBoughtBooks(reqHeader)
            if(result.status == 200){
                setAllBooks(result.data)
            }else{
                console.log(result);
            }
            }
        
    }
    
  return (
     <div className='p-10 my-20 shadow rounded'>
        {/* duplicated book with status updation */}
        {
            allBooks?.length>0?
            allBooks?.map(book=>(
                <div className="p-5 roundedmt-4 bg-gray-100">
                    <div className='md:grid grid-cols-[3fr_1fr]'>
                        <div className="px-4">
                            <h1 className="text-2xl">{book?.title}</h1>
                            <h2 className="text-xl">{book?.author}</h2>
                            <h3 className="text-lg text-blue-600">$ {book?.discountPrice}</h3>
                            <p className="text-justify">{book?.abstract}</p>
                            <div className="flex mt-3">
                                <img style={{width:'100px',height:'80px',borderRadius:'50%'}} src="https://thumbs.dreamstime.com/b/purchase-stamp-round-sign-label-transparent-background-352589731.jpg" alt="purchase" />
                            </div>
                        </div>
                        <div className="px-4 mt-4 md:mt-0">
                            <img className='w-full' src={book?.imageURL} alt="book" />
                            
                        </div>
                    </div>

                </div>
            ))
            :
            <div className='text-center text-xl font-bold'>You have not yet purchased any books...</div>
        }
    </div>
  )
}

export default Purchase