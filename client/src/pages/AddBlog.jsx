import { Button, TextField } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import { BlogValidation } from '../validation/BlogSchema';
import { postBlog } from '../api/requests';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet"
const AddBlog = () => {
   const navigate = useNavigate()
    const handleSubmit = async (values,actions)=>{
       await postBlog(values)
        
        actions.resetForm();
        navigate('/')
    }
    const formik = useFormik({
        initialValues:{
            imageURL:"",
            title:"",
            desc:"",
            year:""
        },
        validationSchema:BlogValidation,
        onSubmit:handleSubmit
    })
  return (
    <>
    <Helmet>
        <title>Add Blog</title>
    </Helmet>
    <form onSubmit={formik.handleSubmit} style={{margin:'0 auto'}}>
        <TextField name='imageURL' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.imageURL} id="outlined-basic" label="imageURL" variant="outlined" /><br/>
        {formik.errors.imageURL && formik.touched.imageURL && (<span>{formik.errors.imageURL}</span>)}

        <TextField name='title' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} id="outlined-basic" label="title" variant="outlined" /><br/>
        {formik.errors.title && formik.touched.title && (<span>{formik.errors.title}</span>)}
        <TextField name='desc' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.desc} id="outlined-basic" label="desx" variant="outlined" /><br/>
        {formik.errors.desc && formik.touched.desc && (<span>{formik.errors.desc}</span>)}
        <TextField name='year' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.year} id="outlined-basic" label="year" variant="outlined" /><br/>
        {formik.errors.year && formik.touched.year && (<span>{formik.errors.year}</span>)}
    
        <TextField name='like'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.like} id="outlined-basic" label="like" variant="outlined"/><br/>
        <TextField name='comment'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.comment} id="outlined-basic" label="comment" variant="outlined"/>
         
    <Button variant='contained' color='error'
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit">Add Blog</Button>
    </form>
    </>
  )
}

export default AddBlog