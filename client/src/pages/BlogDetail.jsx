import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogByID } from '../api/requests';
import { Helmet } from 'react-helmet';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

const BlogDetail = () => {
  const {id} = useParams();
  const[blog,setBlog]=useState({})
  const navigate = useNavigate();
  useEffect(()=>{
    getBlogByID(id).then(res=>{
      setBlog(res)
    })
  },[id])
 

  return (
    <>
    <Helmet>
        <title>Blog Detail Page</title>
    </Helmet>

    <Row style={{display:'flex', justifyContent:'center', width:'80%', margin:'0 auto'}}>
        
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
                <Button><Link to='/'>Go Back</Link></Button>
              </Card>
            </Col>
      </Row>
    </>
  )
}

export default BlogDetail