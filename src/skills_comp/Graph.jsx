import React from 'react'
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";


const Graph = () => {
  return (
      <>
        <section className='bg-custom-dark pb-36 w-full overflow-x-hiddens pl-16 lg:pl-48 grid grid-cols-1 place-content-center font-bebas 2xl:px-[500px]'>
        <h1 className='float-left text-2xl lg:text-3xl  font-bold text-slate-400 pb-10'>My Graphic Design skills :</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className=' mr-12 '>
            <div className='flex'>
              <SiAdobephotoshop className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl' />
              <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>Adobe Photoshop</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                  
              </div>
            </div>
          </div>
          <div className=' mr-12 '>
            <div className='flex'>
              <SiAdobeillustrator className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl' />
              <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>Adobe Illustrator</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-8/12 rounded-3xl mb-6 animate-growWidthMiddle'>
                  
              </div>
            </div>
          </div>
          
          
        </div>
      </section>
      </>
  )
}

export default Graph