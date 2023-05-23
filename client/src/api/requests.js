import { BASE_URL } from "./base_url";
import axios from "axios"

//get all blogs
export const getAllBlogs = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/blogs`).then((res)=>{
        globalData=res.data
    })
   return globalData
}

//get blog by id
export const getBlogByID = async(ID)=>{
    let globalData;
    await axios.get(`${BASE_URL}/blogs/${ID}`).then((res)=>{
        globalData=res.data.data
    })
    return globalData
}

//delete blog by id
export const deleteBlog = async(ID)=>{
    let globalData;
    await axios.delete(`${BASE_URL}/blogs/${ID}`).then((res)=>{
        globalData=res.data.data
    })
    return globalData
}

export const postBlog = (newBlog)=>{
   axios.post(`${BASE_URL}/blogs`, newBlog)
   
}