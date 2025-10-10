import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import saidal from '../assets/images/dash.jpg'
import buybay from '../assets/images/buybay.png'
import odelice from '../assets/images/od1.jpg'
import car from '../assets/images/car1.png'
import dashboard from '../assets/images/dashboard.png'

const projects = [
  {
    image: saidal,
    title: 'Saïdal Dashboard',
    tech: ['HTML', 'CSS','JavaScript', 'PHP']
  },
  {
    image: buybay,
    title: 'BuyBay E-Commerce',
    tech: ['HTML', 'CSS','JavaScript', 'Django', 'PhpMyAdmin']
  },
  {
    image: odelice,
    title: 'Ô Délice Restaurant',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    image: car,
    title: 'Car Rental System',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
]

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col font-bebas bg-custom-dark text-slate-300 pb-16 pt-10 px-10 lg:px-48 2xl:px-[500px]"
    >
      <h1 className="text-4xl lg:text-5xl text-lime-400 underline underline-offset-8 decoration-lime-400 font-bebas">
        Portfolio
      </h1>

      {/* Slider */}
      <div className="mt-10">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-transparent rounded-2xl p-4 hover:-translate-y-1 transition transform shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-xl drop-shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl text-lime-400">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {project.tech.join(' · ')}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className="flex justify-center pt-10">
        <Link to="/Portfolio">
          <button className="text-xl rounded w-32 text-white py-2 px-2 bg-lime-700 hover:outline hover:outline-lime-400 hover:bg-lime-400 hover:text-black transition">
            View more
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Portfolio
