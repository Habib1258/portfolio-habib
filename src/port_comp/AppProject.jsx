import React from 'react'
import Project from './project'
import saidal from '../assets/images/dash.jpg'
import buybay from '../assets/images/buybay.png'
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const AppProject = () => {
  return (
    <>
        <section className='bg-custom-dark w-full text-slate-300 py-6 px-48 m-auto pb-20 font-bebas justify-center items-center grid grid-cols-1'>
              <h1 className='float-left text-5xl font-bebas'>App Projects</h1>
              <div className='grid grid-cols-2 text-center gap-14'>
                  <Project>
                    <img src={ saidal } className='w-48 h-48 rounded-lg' alt='Project 1' />
                    <h1 className='text-5xl pt-10 text-lime-400 underline underline-offset-8 font-bebas'>Saidal WebSite</h1>
                      <p className='text-xl text-left px-20 pt-10 font-bebas'>website for hundeling personnels and interns for saidal </p> 
                      <p className='text-xl text-left pt-10'>Technologies used :</p>
                      <div className='mt-2 grid grid-cols-3'>
                          <span className='ml-2 px-2 py-2 mt-2 rounded-2xl drop-shadow-lg bg-opacity-30 bg-lime-400'>Html</span>
                          <span className='ml-2 px-2 py-2 mt-2 rounded-2xl drop-shadow-lg bg-opacity-30 bg-lime-400'>CSS</span>
                          <span className='ml-2 px-2 py-2 mt-2 rounded-2xl drop-shadow-lg bg-opacity-30 bg-lime-400'>JS</span>
                          <span className='ml-5 px-2 py-2 mt-2 rounded-2xl drop-shadow-lg bg-opacity-30 bg-lime-400'>PHP</span>
                      </div>
                      <Link to="https://github.com/Habib1258/Saidal-PFE" className='bg-lime-600 rounded mt-2 p-2 flex text-xl gap-2 hover:bg-lime-900 hover:outline-double outline-offset-4 outline-lime-400'><FaGithub className='font-bold pt-1 text-2xl'/>Code Source</Link>
                </Project>
                <Project>
                    <img src={ buybay } className='w-48 h-48 rounded-xl' alt='Project 1' />
                    <h1 className='text-5xl pt-10 text-lime-400 underline underline-offset-8'>Buybay WebSite</h1>
                      <p className='text-xl text-left px-20 pt-10'> Buybay is an e-commerce platform that facilitates consumer-to-consumer.</p>
                      <p className='text-xl text-left pt-10'>Technologies used :</p>
                      <div className='mt-2 grid grid-cols-3'>
                          <span className='ml-2 px-2 py-2 mt-2 rounded-2xl drop-shadow-lg bg-opacity-30 bg-lime-400'>Html</span>
                          <span className='ml-2 px-2 py-2 mt-2 rounded-2xl drop-shadow-lg bg-opacity-30 bg-lime-400'>CSS</span>
                          <span className='ml-2 px-2 py-2 mt-2 rounded-2xl drop-shadow-lg bg-opacity-30 bg-lime-400'>JS</span>
                          <span className='ml-5 px-2 py-2 mt-2 rounded-2xl drop-shadow-lg bg-opacity-30 bg-lime-400'>Django</span>
                      </div>
                      <Link to="https://github.com/Habib1258/Saidal-PFE" className='bg-lime-600 rounded mt-2 p-2 flex text-xl gap-2 hover:bg-lime-900 hover:outline outline-offset-4 outline-lime-400'><FaGithub className='font-bold pt-1 text-2xl'/>Code Source</Link>
                  </Project>
            </div>
        </section>
    </>
  )
}

export default AppProject