import React from 'react'

const Per = () => {
  return (
      <>
        <section className='bg-custom-dark text-white w-full overflow-x-hidden pb-36 font-bebas pl-16 lg:pl-48 place-content-center 2xl:px-[700px]'>
        
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-6'>
          <div className='grid grid-cols-1'>
            <div>
              <h1 className='float-left text-2xl lg:text-3xl  font-bold text-slate-400 pb-10'>My Personal skills :</h1>
            </div>
            <div className=' mr-12 rounded-2xl'>
                          <h1 className='text-lg lg:text-2xl text-slate-300 px-10 pb-6 rounded font-bold'> Problem solving</h1>
                          <h1 className='text-lg lg:text-2xl text-slate-300 px-10 pb-6 rounded font-bold'> Creativity</h1>
                          <h1 className='text-lg lg:text-2xl text-slate-300 px-10 pb-6 rounded font-bold'> Project management</h1>
                          <h1 className='text-lg lg:text-2xl text-slate-300 px-10 pb-6 rounded font-bold'> Adaptability</h1>
                          <h1 className='text-lg lg:text-2xl text-slate-300 px-10 pb-6 rounded font-bold'> Teamwork</h1>
            </div>
          </div>
          <div className='grid grid-cols-1'>
            <div>
              <h1 className='float-left text-2xl lg:text-3xl  font-bold text-slate-400 pb-10'>in Progress skills :</h1>
            </div>
            <div className=' mr-12 rounded-2xl'>
                        <h1 className='text-lg lg:text-2xl text-slate-300 px-10 pb-6 rounded font-bold'> Mongodb</h1>
                        
                  <h1 className='text-lg lg:text-2xl text-slate-300 px-10 pb-6 rounded font-bold'> Node.js</h1>
                        <h1 className='text-lg lg:text-2xl text-slate-300 px-10  rounded font-bold'> German</h1>
              </div>
          </div>
          <div className='grid grid-cols-1'>
            <div>
              <h1 className='float-left text-2xl lg:text-3xl  font-bold text-slate-400 pb-10'>skills Planing to learn :</h1>
            </div>
            <div className=' mr-12 rounded-2xl'>
                </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Per