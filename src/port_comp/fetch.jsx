// src/port_comp/WebProject.jsx
import React, { useEffect, useState } from 'react';
import { getProjects } from '../api';

function FetchData()  {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('mongodb://localhost:27017')
    .then(response => response.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <ul>
            {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FetchData;