import React from 'react'
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  return (
    <>
        <section className='bg-custom-dark lg:pt-36 w-full pr-8 mx-auto overflow-x-hidden px-auto font-bebas text-2xl'> 
            <h1 className="text-4xl text-lime-400 underline underline-offset-8 ml-10 mb-16 lg:text-5xl lg:ml-48 2xl:px-[400px]">Skills</h1>
            <div className="grid grid-cols-2 ml-8 lg:ml-16 mt-2 lg:mt-6 justify-center sm:grid-cols-2 place-items-center lg:grid-cols-4 gap-4 lg:px-48 2xl:px-[700px] mb-20">
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center ">
                <FontAwesomeIcon icon={faPython} className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6  lg:mx-4 text-yellow-700' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Python</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <FontAwesomeIcon icon={faJava} className=' w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-orange-700' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>JavaSwing</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <SiDjango className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-lime-700'/>
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Django</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <FontAwesomeIcon icon={faReact} className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-blue-400' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>React</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <FontAwesomeIcon icon={faPhp} className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-blue-400' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>PHP</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <FontAwesomeIcon icon={faHtml5} className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-orange-700' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Html</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <FontAwesomeIcon icon={faCss3} className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-blue-400' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Css</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <FontAwesomeIcon icon={faJs}  className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-yellow-300' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>JavaScript</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <GrMysql className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-sky-300' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Mysql</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <SiMongodb className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-green-700' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Mongodb</h3>
          </div>
            <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl  justify-center">
                <RiTailwindCssFill className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-cyan-700' />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Tailwind</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl justify-center">
                <SiAdobephotoshop className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-sky-500'  />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Photoshop</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl  justify-center">
                <SiAdobeillustrator className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-orange-700'  />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Illustrator</h3>
              </div>
              <div className="w-28 h-28 lg:w-48 lg:h-48  lg:mb-6 p-2 lg:py-8 lg:px-8 shadow-xl bg-gray-700 rounded-xl  justify-center">
                <FaFigma  className='w-12 h-12 lg:w-24 lg:h-24 mt-4 mx-6 lg:mx-4 text-[#F24E1E]'  />
                <h3 className=' text-xl lg:text-xl text-white pt-2 text-center lg:py-3'>Figma</h3>
              </div>
            </div>
        </section>
    </>
  )
}

export default Skills