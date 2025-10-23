import Project from './project'
import saidal from '../assets/images/dash.jpg'
import buybay from '../assets/images/buybay.png'
import odelice from '../assets/images/od1.jpg'
import car from '../assets/images/car1.png'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
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

const WebProject = () => {
  return (
    <>
          <section className='bg-custom-dark w-full text-Text-Primary py-3 lg:py-6 px-8 lg:px-48 font-bebas  place-content-center 2xl:px-[500px] lg:pb-20 '>
              <h1 className='float-left text-3xl lg:text-5xl font-bold'>Web Projects</h1>
              <div className='grid w-full'>     
                  <Project>
                          <img src={ saidal} className='w-auto w-max-[600px] h-full max-h-[600px] lg:w-full lg:h-full rounded-t-xl mx-1 lg:rounded-l-2xl lg:rounded-r-none drop-shadow-2xl ' alt='Project 1' />
                          <div className='pl-4 text-center'>
                            <h1 className='text-2xl lg:text-3xl pt-4 pb-4 text-primary underline underline-offset-8 '>SAIDAL Pharmaceutical Management System — Master’s Final Project</h1>
                            <p className='text-xl lg:text-2xl text-left pt-4 lg:pt-10'>
Developed a web-based HR module to manage part-time staff for SAIDAL Group. Designed and implemented core features (staff records, scheduling, reporting) using [tech stack], improving efficiency and data accuracy.</p>
                          <p className='text-xl lg:text-2xl text-left pb-4 lg:pt-6'><span className='text-primary'>tech stack:</span> 
                            <FontAwesomeIcon icon={faHtml5} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-orange-700' />
                            <FontAwesomeIcon icon={faCss3} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-blue-400' />
                            <FontAwesomeIcon icon={faJs}  className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-yellow-300' />
                            <FontAwesomeIcon icon={faPhp} className='w-5 h-auto lg:w-10 lg:h-auto mt-4 mx-2 lg:mx-4 text-blue-400' />
                          </p>
                          <div className='flex justify-center items-center mx-auto lg:mt-20 '>
                            <Link to="https://github.com/Habib1258/Saidal-PFE" className='bg-primary rounded mx-20 mb-4 p-2 flex w-28 lg:w-48 text-sm lg:text-xl text-center justify-center gap-4 hover:bg-Hover hover:outline-double outline-offset-4 outline-Hover'>
                            <FaGithub  className='lg:font-bold pt-0 lg:pt-1 text-sm lg:text-2xl' /> code source </Link>
                          </div>
                          </div>
                          
                  </Project>
                  <Project>
                    <img src={buybay} className='w-auto w-max-[600px] h-full max-h-[600px] lg:w-full lg:h-fullrounded-t-xl mx-1 lg:rounded-l-2xl lg:rounded-r-none drop-shadow-2xl' alt='Project 1' />
                    <div className='pl-4 text-center'>
                      <h1 className='text-2xl lg:text-3xl pt-4 pb-4 text-primary underline underline-offset-8 '>Buybay WebSite</h1>
                      <p className='text-xl lg:text-2xl text-left pt-4 lg:pt-10'>Buybay is a consumer-to-consumer (C2C) e-commerce platform that enables individuals to buy and sell products directly with each other.</p>
                      <p className=' text-xl lg:text-2xl text-left pb-4 lg:pt-6'><span className='text-primary'>tech stack:</span> 
                            <FontAwesomeIcon icon={faHtml5} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-orange-700' />
                            <FontAwesomeIcon icon={faCss3} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-blue-400' />
                            <FontAwesomeIcon icon={faJs}  className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-yellow-300' />
                            <FontAwesomeIcon icon={faPython} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-yellow-500' />
                          </p>
                          <div className='flex justify-center items-center mx-auto lg:mt-20 '>
                            <Link to="https://github.com/Habib1258/Saidal-PFE" className='bg-primary rounded mx-20 mb-4 p-2 flex w-28 lg:w-48 text-sm lg:text-xl text-center justify-center gap-4 hover:bg-Hover hover:outline-double outline-offset-4 outline-Hover'>
                            <FaGithub  className='lg:font-bold pt-0 lg:pt-1 text-sm lg:text-2xl' /> code source </Link>
                          </div>
                    </div>
                    
                  </Project>
                  <Project>
                    <img src={odelice} className='w-auto w-max-[600px] h-full max-h-[600px] lg:w-full lg:h-full rounded-t-xl mx-1  lg:rounded-l-2xl lg:rounded-r-none drop-shadow-2xl' alt='Project 1' />
                    <div className='pl-4 text-center'>
                      <h1 className='text-lg lg:text-3xl pt-4 pb-4 text-lime-400 underline underline-offset-8'>Odelice WebSite</h1>
                      <p className='text-xl lg:text-2xl text-left pt-4 lg:pt-10'>o'delice is a Pizzieria website that helps consumer to see or contact pizzeria admin through its website.</p>
                      <p className=' text-xl lg:text-2xl text-left pb-4 lg:pt-6'><span className='text-primary'>tech stack:</span> 
                            <FontAwesomeIcon icon={faHtml5} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-orange-700' />
                            <FontAwesomeIcon icon={faCss3} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-blue-400' />
                            <FontAwesomeIcon icon={faJs}  className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-yellow-300' />
                          </p>
                    <div className='flex justify-center items-center mx-auto lg:mt-10 '>
                            <Link to="https://github.com/Habib1258/Saidal-PFE" className='bg-primary rounded mx-20 mb-4 p-2 flex w-28 lg:w-48 text-sm lg:text-xl text-center justify-center gap-4 hover:bg-Hover hover:outline-double outline-offset-4 outline-Hover'>
                            <FaGithub  className='lg:font-bold pt-0 lg:pt-1 text-sm lg:text-2xl' /> code source </Link>
                          </div>
                    </div>
                    
                </Project>
                
                  <Project>
                    <img src={car} className='w-auto w-max-[600px] h-full max-h-[600px] lg:w-full lg:h-full rounded-t-xl mx-1 lg:rounded-l-2xl lg:rounded-r-none drop-shadow-2xl' alt='Project 1' />
                    <div className='pl-4 text-center'>
                      <h1 className='text-lg lg:text-3xl pt-4 pb-4 text-lime-400 underline underline-offset-8'>Car Location WebSite</h1>
                      <p className='text-xl lg:text-2xl text-left pt-4 lg:pt-5'>Car Rental website! This platform provides an easy and convenient way to rent a wide range of vehicles for your travel needs.</p>
                      <p className=' text-xl lg:text-2xl text-left pb-4 '><span className='text-primary'>tech stack:</span> 
                            <FontAwesomeIcon icon={faHtml5} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-orange-700' />
                            <FontAwesomeIcon icon={faCss3} className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-blue-400' />
                            <FontAwesomeIcon icon={faJs}  className='w-5 h-auto lg:w-6 lg:h-auto mt-4 mx-2 lg:mx-4 text-yellow-300' />
                          </p>
                      <div className='flex justify-center items-center mx-auto '>
                            <Link to="https://github.com/Habib1258/Saidal-PFE" className='bg-primary rounded mx-20 mb-4 p-2 flex w-28 lg:w-48 text-sm lg:text-xl text-center justify-center gap-4 hover:bg-Hover hover:outline-double outline-offset-4 outline-Hover'>
                            <FaGithub  className='lg:font-bold pt-0 lg:pt-1 text-sm lg:text-2xl' /> code source </Link>
                          </div>
                    </div>
                </Project>
            </div>
        </section>
    </>
  )
}

export default WebProject