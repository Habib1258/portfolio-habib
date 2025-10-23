// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-custom-dark text-slate-300 font-bebas">
        <h1 className="text-4xl mb-6">Projet introuvable</h1>
        <Link
          to="/portfolio"
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 hover:text-gray-900"
        >
          Retour au portfolio
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-custom-dark text-slate-300 font-bebas px-6 lg:px-24 py-20 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-gray-400 mb-8">
          {project.category} · {project.date}
        </p>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="rounded-xl shadow-lg mb-8 object-fit w-auto h-auto max-h-[500px]"
        />
        <h3 className="text-3xl leading-relaxed mb-6">{project.description}</h3>
        <p className="text-lg text-gray-200 mb-6">Outils : {project.tools}</p>
        <a
          href={project.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 hover:text-gray-900"
        >
          Voir le PDF
        </a>
      </div>
    </section>
  );
};

export default ProjectPage;
