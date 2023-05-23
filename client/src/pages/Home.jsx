import React from 'react'
import Hero from './Hero'
import Blogs from './Blogs'
import { Helmet } from 'react-helmet'
import Services from './Services'
import Features from './Features'
import About from './About'
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>t
      </Helmet>

      <Hero />
      <Services />
      <Features />
      <Blogs />
      <About/>
    </>
  )
}

export default Home