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

// user-bought-books : called by purshace component when page loads
export const getAllUserBoughtBooksPageAPI = async (reqHeader)=>{
    return await commonAPI ("GET",`${serverURL}/user-books/bought`,{},reqHeader)
} 