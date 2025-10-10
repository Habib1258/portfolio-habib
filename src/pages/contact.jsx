import React from 'react'
import Hero from '../contact_comp/Hero'
import Email from '../contact_comp/Cont'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'

const Contact = () => {
  return (
    <>
      <Email />
      <Toaster position="bottom-center" reverseOrder={false} />
      </>
  )
}

export default Contact