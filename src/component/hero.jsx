import React from 'react'
import prof from '../assets/images/proc.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import DownloadCV from "./DownloadCV";



const Hero = () => {
  return (
    <>
        <section className=' bg-black drop-shadow-2xl flex h-1/2 2xl:pl-[200px] place-content-center w-full mx-auto overflow-x-visible px-auto z-10'>
          <div id="home" className='grid grid-cols-1 mt-4 font-bebas text-3xl lg:flex h-1/2 w-full'>
                 

                  <div className="w-4/6 lg:w-2/6 my-2 pt-10 lg:pb-10 md:my-2 font-bebas lg:pt-24">
                  <h1 className="text-white ml-8 lg:ml-24 font-bebas text-lg lg:text-6xl "><span className="text-lime-400">Hello, </span><br/>Welcome to My Portfolio</h1>
                    
                        <h3 className="text-slate-200  mx-8 lg:mx-24 font-bebas text-lg lg:text-4xl">
                          I'm <span className="text-lime-400">Abdesselem Mustpha El habib</span><br />
                          
                          <span className="inline-block overflow-hidden border-r-4 border-lime-400 whitespace-nowrap w-72 animate-typing">
                            a web developer, and a Graphic designer.
                          </span>
                        </h3>
                        <DownloadCV />
                      </div>
                  <img className="pl-20 lg:pt-10 h-auto w-auto lg:w-3/6 lg:h-2/3 lg:mr-16 lg:mt-5 lg:animate-moveX" src={ prof } alt="" />
          </div>   
          
        </section>

    </>

  )
}

export default Hero