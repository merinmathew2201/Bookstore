// register 

import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register api-called by auth component,when register btn clicked
export const registerAPI = async (reqBody)=>{
    return await commonAPI ("POST",`${serverURL}/register`,reqBody)
} 

// login api-called by auth component,when login btn clicked
export const loginAPI = async (reqBody)=>{
    return await commonAPI ("POST",`${serverURL}/login`,reqBody)
} 

// google login : called by auth component , when google login btn clicked
export const googleLoginAPI = async (reqBody)=>{
    return await commonAPI ("POST",`${serverURL}/google-login`,reqBody)
} 

// /user/add/book :add book api - called by sellbook component when add book btn clicked
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI ("POST",`${serverURL}/user/add/book`,reqBody,reqHeader)
} 

// home books :/home/books- called by home component when page loads
export const getHomePageBooksAPI = async ()=>{
    return await commonAPI ("GET",`${serverURL}/home/books`,{})
} 

// all-books : called by books component when page loads
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
    return await commonAPI ("GET",`${serverURL}/all-books?search=${searchKey}`,{},reqHeader)
} 

// user-profile-books : called by bookstatus component when page loads
export const getAllUserProfileBooksPageAPI = async (reqHeader)=>{
    return await commonAPI ("GET",`${serverURL}/user-books`,{},reqHeader)
} 

// user-bought-books : called by purchase component when page loads
export const getAllUserBoughtBooksPageAPI = async (reqHeader)=>{
    return await commonAPI ("GET",`${serverURL}/user-books/bought`,{},reqHeader)
} 

// /user/:id/edit- put request by edit component when update btn is clicked
export const editUserAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI ("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
} 

// /books/:id/view - called by view component when page loads
export const getSingleBookDetail = async (id,reqHeader)=>{
    return await commonAPI ("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}

// /books/all - called by admincollection when page loads
export const getAllAdminBooksAPI = async (reqHeader)=>{
    return await commonAPI ("GET",`${serverURL}/books/all`,{},reqHeader)
}

// /users/all -called by admincollection when page loads
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI ("GET",`${serverURL}/users/all`,{},reqHeader)
}

// /books/:id/update: put request by admin collection when approve btn clicked
export const updateBookStatusAPI = async (id,reqHeader)=>{
    return await commonAPI ("PUT",`${serverURL}/books/${id}/update`,{},reqHeader)
}

// /admin/:id/edit -put request by adminprofile component when update btn is clicked
export const editAdminAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI ("PUT",`${serverURL}/admin/${id}/edit`,reqBody,reqHeader)
}