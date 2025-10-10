import React from 'react'

const Project = ( {children} ) => {
  return (
    <>
        <div className='w-auto grid grid-cols-1 mx-5 font-bebas text-2xl lg:grid-cols-2 gap-4 sm:place-items-center   border lg:border-border rounded-2xl mt-20 drop-shadow-2xl'>
          {children}
        </div>
    </>
  )
}

export default Project