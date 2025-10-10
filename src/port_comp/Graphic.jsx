import React from 'react'
import ImageStack from './imagestackProduct.jsx';
import ImageStackBranding from './ImagestackBranding.jsx';
import ImageStackPoster from './ImageStackPoster.jsx';

const Graphic = () => {
  return (
    <>
        <section className='w-full flex flex-col pl-12 lg:pl-24 bg-custom-dark font-bebas pt-20 text-slate-300 pb-auto place-content-center 2xl:px-[500px]'>
              <h1 className='float-left text-3xl lg:text-5xl  pt-10  lg:pl-24 font-bold pb-24 lg:pb-32'>Designs</h1>
              <div className='grid grid-cols-1 pl-8 lg:grid-cols-3 gap-10 pr-20'>
                <ImageStack />
                <ImageStackBranding />
                <ImageStackPoster />
              </div>
             
        </section>  
    </>
  )
}

export default Graphic