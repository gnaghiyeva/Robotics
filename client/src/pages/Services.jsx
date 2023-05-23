import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Row,Col} from 'antd'
const Services = () => {
  return (
   <>
   <section style={{marginBottom:'100px', marginTop:'100px'}}>
   <article style={{textAlign:'center',marginBottom:'70px'}}>
    <h1 style={{fontSize:'36px'}}>Our Offered Services</h1>
    <p style={{fontSize:'15px', color:'#777777'}}>Who are in extremely love with eco friendly system.</p>
   </article>

   <Row style={{display:'flex', justifyContent:'center', width:'80%', margin:'0 auto'}}>
    
    <Col className="gutter-row" span={6}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://preview.colorlib.com/theme/security/img/s1.jpg.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Basic & Common Repairs
        </Typography>
        <Typography variant="body2" color="text.secondary"> 
Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
        </Typography>
      </CardContent>
      
    </Card>
    </Col>

    <Col className="gutter-row" span={6}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://preview.colorlib.com/theme/security/img/s2.jpg.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Brake Repairs & Services
        </Typography>
        <Typography variant="body2" color="text.secondary"> 
Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
        </Typography>
      </CardContent>
      
    </Card>
    </Col>

    <Col className="gutter-row" span={6}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://preview.colorlib.com/theme/security/img/s3.jpg.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Preventive Maintenance
        </Typography>
        <Typography variant="body2" color="text.secondary"> 
       Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
        </Typography>
      </CardContent>
      
    </Card>
    </Col>
   </Row>
   </section>
   </>
  )
}

export default Services