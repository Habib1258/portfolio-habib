import React from 'react'
import Hero from '../port_comp/hero'
import WebProject from '../port_comp/WebProject'
import Graphic from '../port_comp/Graphic'
import Hope from '../port_comp/hope'
import Effect from '../port_comp/effect'
import Helmet from'react-helmet'

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - My Portfolio</title>
        <meta name="description" content="Welcome to my homepage" />
      </Helmet>
        <Hero />
        <WebProject />
        <Effect />
        <Graphic/>
      </>
  )
}

export default Projects