import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../assets/logo black.png'

function Authentification() {
    return (
        <section className="w-full h-screen bg-black text-slate-100">
          <div className='align-middle pt-16'>
            <form className="flex flex-col bg-slate-50 text-black mt-10 w-2/3 lg:w-fit h-auto place-items-center mx-auto p-10 rounded-xl drop-shadow-2xl">
              <img src={logo} alt="" className='flex mx-auto w- lg:w-3/6 text-center justify-center items-center self-center pb-10' />
              <h1 className="text-blue-600 text-center text-lg lg:text-2xl pb-10 font-bold">Login to your account</h1>
              
                <div className=' flex flex-col justify-center items-center px-auto'>
                  <input type="text" className="border-2 border-slate-400 p-2 w-60 rounded-xl justify-center self-center" placeholder="Username" />
                  <input type="password" className="border-2 border-slate-400 p-2 mt-3 w-60 mx-auto rounded-xl justify-center self-center" placeholder="Password" />
                  <Link to="/Admin" className='text-blue-500'><button className="bg-blue-500 hover:bg-blue-800 font-bold text-white p-2 mt-3 w-60 rounded-full">Login</button></Link>
                  <h3 className='flex flex-row w-auto text-black pl-5 p-2 text-xs lg:text-sm'>You don't have an account,&nbsp; <Link to="/signup" className='text-blue-500'> Sign Up</Link> </h3>
                </div>
            </form>
          </div>
        </section>
    )
}

export default Authentification
