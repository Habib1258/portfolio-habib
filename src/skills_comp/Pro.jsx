import React from 'react'

const Pro = () => {
  return (
      <>
        <section className='bg-custom-dark text-white w-full overflow-x-hidden font-bebas pb-36 pl-16 lg:pl-48 grid place-content-center 2xl:px-[500px]'>
            <div>
                <h1 className='float-left text-3xl  font-bold text-slate-400 pb-10'>in Progress skills :</h1>
                <div className='grid grid-cols-3 gap-6'>
                    <div className=' mr-12 rounded-2xl'>
                        <h1 className='text-2xl text-slate-300 px-10 py-6 rounded font-bold'>- Mongodb</h1>
                        <h1 className='text-2xl text-slate-300 px-10 py-6 rounded font-bold'>- German</h1>
                
                    </div>
                </div>
              </div>
              <div>
                <h1 className='float-left text-3xl  font-bold text-slate-400 pb-10'>skills Planing to learn :</h1>
                <div className='grid grid-cols-3 gap-6'>
                    <div className=' mr-12 rounded-2xl'>
                        <h1 className='text-2xl text-slate-300 px-10 py-6 rounded font-bold'>- Node.js</h1>
                        <h1 className='text-2xl text-slate-300 px-10 py-6 rounded font-bold'>- React Native</h1>
                
                    </div>
                </div>
            </div>
      </section>
      </>
  )
}

export default Pro