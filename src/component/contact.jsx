import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <>
          <section className='bg-custom-dark grid grid-cols-1 w-full mb-0 mx-auto overflow-x-hidden px-auto font-bebas'>
              <div className="grid grid-cols-1 gap-8 lg:gap-20 px-24 pb-32 w-full bg-custom-light-dark border-y-4 border-lime-400 items-center">
                  <h1 className="text-xl text-lime-400 font-bold text-center lg:text-5xl lg:pt-12">
                        Contact Me
                    </h1>  
                  <div className='grid grid-cols-1 lg:flex gap-20'>
                      <div className="bg-custom-dark flex w-64 lg:w-96 mt-24 justify-self-center  items-center rounded-xl">
                        <FontAwesomeIcon icon={faEnvelope} className='text-xl text-lime-400 ml-2 py-4 px-4 lg:text-2xl'/>
                        <h2 className="text-lime-400 py-4 text-sm lg:text-xl">habib054mustapha@gmail.com</h2>
                    </div>
                    <div className="bg-custom-dark flex w-64 lg:w-96 mt-24 justify-self-center  items-center rounded-xl ">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className='text-xl text-lime-400 ml-2 py-4 px-4 lg:text-2xl'/>
                        <h2 className="text-lime-400 py-4 text-md lg:text-xl ">Tiaret, Algeria</h2>
                    </div>
                    <div className="bg-custom-dark flex w-64 lg:w-96 mt-24 justify-self-center  items-center rounded-xl ">
                        <FontAwesomeIcon icon={faPhone} className='text-xl text-lime-400 ml-2 py-4 px-4 lg:text-2xl'/>
                        <h2 className="text-lime-400 py-4 text-md lg:text-xl">+213549573583</h2>
                    </div>
                    </div>
            </div>
        </section>

        
    </>
  )
}

export default Contact








