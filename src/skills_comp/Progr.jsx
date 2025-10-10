import React from 'react'
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'

const Progr = () => {
  return (
      <>
      <section className='bg-custom-dark w-full  overflow-x-hidden font-bebas pb-36 pl-16 lg:pl-48 grid grid-cols-1 place-content-center 2xl:px-[500px]'>
        <h1 className='float-left text-2xl lg:text-3xl  font-bold text-slate-400 pb-10'>My Programing skills :</h1>
        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className=' mr-12 '>
            <div className='flex'>
              <FontAwesomeIcon icon={faPython} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
              <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>Python</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                  
              </div>
            </div>
          </div>
          
          <div className=' mr-12 '>
            <div className='flex'>
              <FontAwesomeIcon icon={faJava} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
              <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>Java</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                  
              </div>
            </div>
          </div>
          <div className=' mr-12 '>
            <div className='flex'>
              <FontAwesomeIcon icon={faJs} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
              <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>JavaScript</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-4/6 rounded-3xl mb-6 animate-growWidthMiddle'>
                  
              </div>
            </div>
          </div>
          <div className=' mr-12 '>
            <div className='flex'>
              <GrMysql className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl' />
              <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>MySql</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-3/5 rounded-3xl mb-6 animate-growWidthM'>
                  
              </div>
            </div>
          </div>
          <div className=' mr-12 '>
            <div className='flex'>
              <SiMongodb className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
              <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>Mongodb</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-4/12 rounded-3xl mb-6 animate-growWidthL'>
                  
              </div>
            </div>
          </div>
          
        </div>
      </section>
      </>
  )
}

export default Progr