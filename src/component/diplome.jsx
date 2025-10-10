import React from 'react'
import ccna from '../assets/images/ccna.jpg'
import licence from '../assets/images/dip.jpg'
import sem from '../assets/images/sem.png'

const Diplome = () => {
  return (
    <>
        <section className="bg-custom-gray-dark drop-shadow-2xl shadow-lime-400	 pb-1 lg:pb-16 w-full mx-auto overflow-x-hidden px-auto font-bebas">
            <h1 className='text-2xl text-slate-100 font-bold ml-12 py-12 underline underline-offset-16 lg:ml-48 lg:text-4xl'>My Education :</h1>
            <div className='grid grid-cols-1 items-center place-content-center content-center w-full justify-center mx-auto lg:grid-cols-3 2xl:px-48 '>
                <div className='grid place-content-center w-full'>
                    <img src={ccna} className='w-2/5 mx-auto h-auto pt-6 lg:w-72 lg:h-72 drop-shadow-2xl' alt="Cisco Certified Network" />
                    <h1 className="text-white text-2xl mx-auto text-center pt-7 mb-20 lg:text-3xl">Cisco Certified Network <br />Associate</h1>
                </div>
                <div className='grid place-content-center w-full'>
                    <img src={sem} className='w-2/5 mx-auto h-auto pt-6 lg:w-72 lg:h-72 drop-shadow-2xl' alt="SEO fundamentals" />
                    <h2 className="text-white text-2xl text-center pt-7 mb-28 lg:text-3xl">SEO fundamentals</h2>
                </div>
                <div className='grid place-content-center w-full'>
                    <img src={licence} className='w-2/5 mx-auto h-auto pt-6 lg:w-72 lg:h-72 drop-shadow-2xl' alt="Bachelor's degree" />
                    <h2 className="text-white text-2xl text-center pt-7 mb-28 lg:text-3xl">Bachelor's degree</h2>
                </div>
            </div>
        </section>
    </>
  )
}

export default Diplome