import { Button } from '@mui/material'
import React from 'react'

import herostyle from "../styles/hero.module.css"
const Hero = () => {
    return (
        <>
            <section className={herostyle.hero}>
            <article style={{color:'white', width:'50%', textAlign:'left', paddingTop:'300px', paddingLeft:'250px'}}>
                <h6 style={{fontSize:'15px'}}>Openning on 21st February, 2018</h6><br/>
                <h1 style={{fontSize:'48px'}}>Exhibition on Modern Era</h1><br/>
                <p style={{fontSize:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt..</p>
                <br/>
                <Button variant='contained' color='error'>GET STARTED</Button>
            </article>
            </section>
            
        </>
    )
}

export default Hero