import React, { useState } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// 🏠 Main pages
import HomePage from './pages/homePage';
import MainLayout from './layout/MainLayout';
import Projects from './pages/projects';
import Skills from './pages/Skills';
import Contact from './pages/contact';
import ErrorPage from './pages/NotFoundPage';
import Loader from './port_comp/Loader';

// 🧑‍💼 Admin pages
import AdminPage from '../admin/pages/AdminPage';
import Visuels from '../admin/pages/VisuelsPage';
import Panel_layout from '../admin/layout/Panel_layout';
import Auth from '../admin/pages/Auth';

// 🎨 Portfolio project page (dynamic)
import ProjectPage from './pages/ProjectPage';

// ⚙️ Define router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🔐 Auth */}
      <Route path="/login" element={<Auth />} />

      {/* 🧩 Admin panel */}
      <Route path="/admin" element={<Panel_layout />}>
        <Route index element={<AdminPage />} />
        <Route path="logout" element={<HomePage />} />
        <Route path="visuels" element={<Visuels />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      {/* 🌐 Main site */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<Projects />} /> {/* portfolio list */}
        <Route path="portfolio/:id" element={<ProjectPage />} /> {/* individual project */}
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);

function App() {
  const [showLoader] = useState(false);

  return (
    <>
      {showLoader && <Loader />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
