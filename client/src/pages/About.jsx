import React from 'react'
import {Row,Col} from 'antd'
import { Button, TextField } from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PsychologyIcon from '@mui/icons-material/Psychology';
const About = () => {
  return (
   <>
   <section style={{backgroundColor:"#04091E", color:'white', padding:'60px 0'}}>
    <Row style={{display:'flex', width:'80%', margin:'0 auto', justifyContent:'space-between'}}>
        <Col className="gutter-row" span={8}>
        <h1>About Us</h1><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p><br/>
        <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p><br/>
        </Col>

        <Col>
        <h1>Newsletter</h1>
        <p>Stay update with our latest</p> <br/>
        <div style={{display:'flex'}}>
        <TextField style={{width:'400px', backgroundColor:'white'}}  id="outlined-basic" variant="outlined" />
        <Button variant='contained' color='warning'><DoubleArrowIcon/></Button>
        </div>
        </Col>

        <Col>
        <h1>Follow Us</h1> <br/>
        <span>Let us be social</span>
        <ul style={{listStyle:'none', display:'flex'}}>
                    <li style={{marginRight:'25px'}}><FacebookIcon/></li>
                    <li style={{marginRight:'25px'}}><TwitterIcon/></li>
                    <li style={{marginRight:'25px'}}><SportsBasketballIcon/></li>
                    <li style={{marginRight:'25px'}}><PsychologyIcon/></li>
                </ul>
        </Col>
    </Row>
   </section>
   </>
  )
}

export default About