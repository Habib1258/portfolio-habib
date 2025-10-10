import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { IoMdArrowBack } from "react-icons/io"
import { Link } from 'react-router-dom';


const Web = () => {
  return (
    <>
      <section className='bg-custom-dark w-full font-bebas pl-6 lg:pl-48 text-white pt-16 lg:pt-24  '>
                  <div >
                      <div className='flex pb-2 pl-0'>
                            <Link to="/" className='flex'>
                                <IoMdArrowBack className='mr-2 text-xl lg:text-3xl text-lime-400' />
                                <h1 className='text-lime-400 text-xl lg:text-3xl underline underline-offset-4'>Habib Mustapha</h1>
                            </Link>
                    </div>
                    <h1 className='text-white text-5xl lg:text-7xl pl-0 lg:pl-6 pb-20 font-bold'>My Skills </h1>
                </div>
        </section>
      <section className='w-full overflow-hidden'>
     

        
          <section className='bg-custom-dark w-full overflow-x-hidden font-bebas pb-36 pl-16 lg:pl-48 grid grid-cols-1 place-content-center 2xl:px-[500px]'>
            <h1 className='float-left text-xl lg:text-3xl  font-bold text-slate-400 pb-10'>My Web developement skills :</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <div className=' mr-12 '>
                <div className='flex'>
                  <FontAwesomeIcon icon={faHtml5} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>HTML:5</h1>
              </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                <div className='bg-lime-400 h-3 w-5/6 rounded-3xl mb-6 animate-growWidthMax'>
                  
                  </div>
                </div>
              </div>
              <div className=' mr-12 '>
                <div className='flex'>
                  <FontAwesomeIcon icon={faCss3} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>CSS</h1>
                </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                  <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                      
                  </div>
                </div>
              </div>
              <div className=' mr-12 '>
                <div className='flex'>
                  <FontAwesomeIcon icon={faReact} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>React.js</h1>
                </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                  <div className='bg-lime-400 h-3 w-4/6 rounded-3xl mb-6 animate-growWidthMiddle'>
                      
                  </div>
                </div>
              </div>
              <div className=' mr-12 '>
                <div className='flex'>
                  <RiTailwindCssFill className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>tailwind</h1>
                </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                  <div className='bg-lime-400 h-3 w-5/6 rounded-3xl mb-6 animate-growWidthMax'>
                      
                  </div>
                </div>
              </div>
              <div className=' mr-12 '>
                <div className='flex'>
                  <SiDjango className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>django</h1>
                </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                  <div className='bg-lime-400 h-3 w-3/5 rounded-3xl mb-6 animate-growWidthM'>
                      
                  </div>
                </div>
              </div>
              
            </div>
        </section>
        
      </section>
    </>
  )
}

export default Web