import React, { useEffect, useState } from 'react'
import { deleteBlog, getAllBlogs } from '../api/requests';
import { Col, Row } from 'antd';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs().then((res) => {
      setBlogs(res.data)
      console.log(res)
    })
  }, [])
  return (
    <>
    <section style={{marginBottom:'60px'}}>

   
      <article style={{textAlign:'center', marginBottom:'100px' }}>
        <h1 style={{fontSize:'36px'}}>Latest From Our Blog</h1>
        <p style={{color:'#777777'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua.</p>
      </article>
      <Row style={{display:'flex', justifyContent:'center', width:'80%', margin:'0 auto', rowGap:'30px'}}>
        {blogs && blogs.map((blog) => {
          return (
            <Col className="gutter-row" span={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={blog.imageURL}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   <Link to={`/${blog._id}`}>{blog.title}</Link> 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.desc}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.year}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{
                   Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      deleteBlog(blog._id).then((res)=>{
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                      })
                      setBlogs(blogs.filter((x)=>x._id!==blog._id))
                    }
                  })
                  }} size="small">Delete</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
                <div style={{display:'flex', justifyContent:'left', gap:'40px'}}>
                  <div style={{display:'flex', alignItems:'center'}}>
                  <FavoriteBorderIcon/> 
                  <span>{blog.like}likes</span>
                  </div>

                  <div style={{display:'flex', alignItems:'center'}}>
                  <ChatBubbleOutlineIcon/> 
                  <span>{blog.comment}comments</span>
                  </div>
                </div>
              </Card>
            </Col>

          )
        })}


      </Row>
      </section>
    </>
  )
}

export default Blogs