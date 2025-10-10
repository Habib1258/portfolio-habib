import React from 'react'

const Lan = () => {
  return (
      <>
        <section className='bg-custom-dark text-white w-full pl-16 lg:pl-48 overflow-x-hidden pb-36 grid grid-cols-1 font-bebas place-content-center 2xl:px-[500px]'>
        <h1 className='float-left text-2xl lg:text-3xl  font-bold text-slate-400 pb-10'>Languages :</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className=' mr-12 '>
            <div className='flex'>
              <h1 className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl font-Playwrite font-bold'>Ar</h1>
              <h1 className='text-2xl text-slate-300 pl-4 pt-8 py-6 rounded'>Arabic</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-11/12 rounded-3xl mb-6 animate-growWidthMaxed'>
                  
              </div>
            </div>
          </div>
          <div className=' mr-12 '>
            <div className='flex'>
              <h1 className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl font-Playwrite font-bold'>Fr</h1>
              <h1 className='text-2xl text-slate-300 pl-4 pt-8 py-6 rounded'>French</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                  
              </div>
            </div>
          </div>
          <div className=' mr-12 '>
            <div className='flex'>
              <h1 className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl font-Playwrite font-bold'>En</h1>
              <h1 className='text-2xl text-slate-300 pl-4 pt-8 py-6 rounded'>English</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                  
              </div>
            </div>
          </div>
          <div className=' mr-12 '>
            <div className='flex'>
              <h1 className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl font-Playwrite font-bold'>De</h1>
              <h1 className='text-2xl text-slate-300 pl-4 pt-8 py-6 rounded'>German</h1>
            </div>
            <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
              <div className='bg-lime-400 h-3 w-2/6 rounded-3xl mb-6 animate-growWidthlowest'>
                  
              </div>
            </div>
          </div>
          
        </div>
      </section>
      </>
  )
}

export default Lan