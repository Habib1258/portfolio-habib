import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import exper from '../assets/exper.png'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'

function Panel() {
    return (
        <section className="bg-gray-400 w-2/12 ml-7 rounded-lg h-full mt-5">
            <aside className='pl-10 drop-shadow-2xl h-full'>
                <ul className='mx-auto pl-10 text-white text-xl pt-12 flex flex-col gap-5'>
                    <Link to="/admin" ><li className='py-3 cursor-pointer text-gray-600  hover:text-gray-600 hover:scale-105'><FontAwesomeIcon icon={faTableColumns} className='pr-2' />Projects</li></Link>
                    <Link to="/admin/Visuels" ><li className='py-3 cursor-pointer  hover:text-gray-600 hover:scale-105'><FontAwesomeIcon icon={faUser} className='pr-2' />visuels</li></Link>
                    <Link to="/experience" ><li className='py-3 cursor-pointer  hover:text-gray-600 hover:scale-105'><img src={exper} className='w-10' />Experience </li></Link>
                    <Link to="/skills" ><li className='py-3 cursor-pointer  hover:text-gray-600 hover:scale-105'><FontAwesomeIcon icon={faRightFromBracket} className='pr-2' />Skills</li></Link>
                    <Link to="/" ><li className='py-3 cursor-pointer  hover:text-gray-600 hover:scale-105'><FontAwesomeIcon icon={faRightFromBracket} className='pr-2' />Log Out</li></Link>
                </ul>
            </aside>
        </section>
    )
}

export default Panel
