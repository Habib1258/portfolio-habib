import { Link } from 'react-router-dom';
import logo from '../assets/images/logos.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 


  return (
    <>
      <nav className='bg-black gap- flex w-full h-14 lg:h-28 pb-20 size-full overflow-x-visible px-auto z-50 font-bebas'>
        <Link className='cursor-pointer' to="/"><img className="h-auto w-52 ml-6 mb-4 mt-6 justify-center align-middle lg:w-72 lg:mt-8 lg:ml-16" src={ logo } alt="habib's logo" /></Link>
           
        
        <div className=" w-5/6 flex justify-end z-40 ">
          <button onClick={() => setIsOpen(!isOpen)} className="absolute top-7 right-10 lg:hidden  z-50 text-2xl justify-end ">
        {isOpen ? <FaXmark className='text-black'/> : <FaBars className='text-white '/>}
      </button>
                <ul className={`absolute w-fit mr-8 mt-3 pt-2 pb-3 bg-slate-400 lg:bg-transparent rounded-2xl shadow-lg lg:w-5/6 grid lg:flex lg:justify-center lg:pr-44 overflow-auto ${ isOpen ? "block" : "hidden" } gap-2 md:gap-8 pr-9 z-30`}>
                    <Link className='cursor-pointer' onClick={() => setIsOpen(false)} to="/"><li className=" lg:py-6 lg:px-2 md:px-4 pr-2 pl-3 2xl:px-7 text-sm lg:text-3xl 2xl:text-3xl text-end space-x-5 text-black lg:text-white hover:text-lime-400 hover:underline underline-offset-8 ">Home</li></Link>
                    <Link className='cursor-pointer' onClick={() => setIsOpen(false)} to="/Portfolio"><li className=" lg:py-6 lg:px-2 md:px-4 pr-2 pl-3 2xl:px-7 text-sm lg:text-3xl 2xl:text-3xl  text-end space-x-5 text-black lg:text-white hover:text-lime-400 hover:underline underline-offset-8">Portfolio</li></Link>
                    <Link className='cursor-pointer' onClick={() => setIsOpen(false)} to="/skills"><li className=" lg:py-6 lg:px-2 md:px-4 pr-2 pl-3 2xl:px-7 text-sm lg:text-3xl 2xl:text-3xl  text-end space-x-5 text-black lg:text-white hover:text-lime-400 hover:underline underline-offset-8">Skills</li></Link>
                    <Link className='cursor-pointer' onClick={() => setIsOpen(false)} to="/contact"><li className=" lg:py-6 lg:px-2 md:px-4 pr-2 pl-3 2xl:px-7 text-sm lg:text-3xl 2xl:text-3xl  text-end space-x-5 text-black lg:text-white hover:text-lime-400 hover:underline underline-offset-8">Contact</li></Link>    
                </ul>
        </div>

      
      </nav>
    </>
  )
}

export default Navbar