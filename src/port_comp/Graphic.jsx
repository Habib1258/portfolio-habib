// src/port_comp/Graphic.jsx
import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const categories = ["Logos & Branding", "Posters & Menus", "Media Posts"];

const Graphic = () => {
  return (
    <section className="w-full flex flex-col items-center bg-custom-dark font-bebas text-slate-300 pt-20 pb-24 px-6 lg:px-24 2xl:px-[500px]">
      <h1 className="text-4xl lg:text-6xl font-bold mb-16">Designs Graphiques</h1>

      {categories.map((category) => (
        <div key={category} className="w-full mb-20">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {projectsData
              .filter((p) => p.category === category)
              .map((project) => (
                <article
                  key={project.id}
                  className="bg-white text-gray-900 rounded-2xl shadow-md overflow-hidden flex flex-col"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-[100px] min-h-[100px] lg:h-[300px] w-auto object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.date}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Outils : {project.tools}
                      </span>
                      <Link
  to={`/portfolio/${project.id}`}
  className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-100"
>
  <span className="hidden md:inline">Voir le projet</span> {/* shown on desktop */}
  <span className="inline md:hidden">Voir</span> {/* shown on mobile */}
</Link>

                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Graphic;
