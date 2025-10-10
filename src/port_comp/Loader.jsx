import React from 'react'
import logo from '../assets/images/logoc.png';

const Loader = () => {
  return (
    <>
        <section className='bg-custom-dark h-[800px] w-auto place-content-center self-center fixed inset-0'>
            <div className='grid grid-cols-1 self-center justify-items-center'>
                  <img className="h-auto w-36 lg:w-96 px-2 pt-4" src={logo} alt="habib's logo" />
                  <div className='bg-slate-400 w-36 lg:w-96 h-1 '>
                      <div className='bg-custom-cyan w-10 h-1 animate-loader'></div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default Loader