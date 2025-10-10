import React from 'react'
import logo from '../assets/logo black.png';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
    return (
        <>
      <nav className='bg-white flex w-full lg:h-48 overflow-x-hidden px-auto font-bebas'>
        <Link className='cursor-pointer' to="/">
            <img className="ml-16  mb-4 mt-6 justify-center align-middle w-36  lg:mt-8 lg:ml-24" src={ logo } alt="habib's logo" />
        </Link>
           
      </nav>
    </>
    )
}

export default Navbar
