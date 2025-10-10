// src/components/ProjectList.js
import React, { useEffect, useState } from 'react';
import { getProjects } from '../api';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProjects();
            setProjects(data);
        };
        fetchData();
    }, []);

    // Implement create, update, and delete functions similarly

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
