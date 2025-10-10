import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"
import { IoArrowForward } from "react-icons/io5"
import { IoMdArrowBack } from "react-icons/io"
import { FaInstagram } from "react-icons/fa6";



const Email = () => {
  return (
    <>
      <section className='bg-custom-dark h-screen 2xl:h-screen font-bebas overflow-hidden'>
          <div className='w-24 lg:w-48 h-24 lg:h-48 animate-moveXY bg-gradient-to-r from-cyan-500 to-purple-500 shadow-xl shadow-indigo-500 rounded-full rotate-45 z-0 absolute top-12 lg:top-32 bottom-0 right-12 lg:right-24 opacity-40 lg:opacity-40 blur-2xl'>

          </div>
          <section className='bg-transparent text-white pt-16 lg:pt-28 w-full lg:pl-48 z-20'>
                <div >
                    <div className='flex pb-2 pl-6'>
                          <Link to="/" className='flex'>
                              <IoMdArrowBack className='mr-2 text-xl lg:text-3xl text-lime-400' />
                              <h1 className='text-lime-400 text-xl lg:text-3xl underline underline-offset-4'>Habib Mustapha</h1>
                          </Link>
                    </div>
                    <h1 className='text-white text-5xl lg:text-7xl pl-6 pb-10 lg:pb-20 font-bold'>Contact Me</h1>
                </div>
          </section>
        <section className='bg-transparent z-40 h-fit  place-content-center 2xl:px-[200px]'>
              <div className='place-content-center justify-center'>
                  <h1 className='text-3xl lg:text-5xl text-lime-400 pb-4 mx-12 lg:mx-64'>E-mail :</h1>
                  <div className="flex ml-12 lg:ml-72">
                    <IoArrowForward className='text-lg  text-white mt-7 lg:mt-8 lg:text-3xl ' />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=a.elhabibmustapha@gmail.com" target="_blank" 
                      className='text-2xl lg:text-4xl text-slate-400 ml-2 lg:ml-4 lg:mr-24 py-6 z-20 hover:text-white'>
                      a.elhabibmustapha@gmail.com
                    </a>
                  </div>
                  <h1 className='text-3xl lg:text-5xl text-lime-400 ml-12 pb-4 lg:mx-64 pt-12'>Social media :</h1>
                  <div className='grid grid-cols-1 gap-8 lg:flex mx-12 lg:mx-72 py-6'>
                      <div className='flex hover:text-lime-400'>
                        <Link to="https://github.com/Habib1258" target="_blank" className='flex hover:text-lime-400'><FaGithub className='text-4xl text-white lg:ml-10 lg:text-5xl ' />
                        <h1 className='text-xl lg:text-4xl font-bold text-white lg:pt-2 pl-4 hover:text-lime-400'>Github</h1></Link>
                      </div>
                      <div className='flex hover:text-lime-400'>
                        <Link to="https://www.linkedin.com/in/mustaphaelhabib/" target="_blank" className='flex'><FaLinkedinIn className='text-4xl text-white lg:ml-10 lg:text-5xl ' />
                        <h1 className='text-xl lg:text-4xl font-bold text-white lg:pt-2 pl-4 hover:text-lime-400'>LinkedIn</h1></Link>
                      </div>
                      <div className='flex hover:text-lime-400'>
                        <Link to="https://web.facebook.com/habib.mustapha.9210" target="_blank" className='flex  hover:text-lime-400'><FaFacebookF className='text-4xl text-white lg:ml-10 lg:text-5xl ' />
                        <h1 className='text-xl lg:text-4xl font-bold text-white lg:pt-2 pl-4 hover:text-lime-400'>Facebook</h1></Link>
                      </div>
                      <div className='flex hover:text-lime-400 pb-40'>
                        <Link to="https://www.instagram.com/habib_design_studio/" target="_blank" className='flex'><FaInstagram   className='text-4xl text-white lg:ml-10 lg:text-5xl ' />
                        <h1 className='text-xl lg:text-4xl font-bold text-white lg:pt-2 pl-4 hover:text-lime-400'>Instagram</h1></Link>
                    </div>
                  </div>
              </div>
          </section>
      </section>
    </>
  )
}

export default Email