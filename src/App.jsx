import React, { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Router
} from 'react-router-dom';
import HomePage from './pages/homePage';
import MainLayout from './layout/MainLayout';
import Projects from './pages/projects';
import Skills from './pages/Skills';
import Contact from './pages/contact';
import Loader from './port_comp/Loader';
import ErrorPage from './pages/NotFoundPage';
import AdminPage from '../admin/pages/AdminPage'
import Visuels from '../admin/pages/VisuelsPage'
import Panel_layout from '../admin/layout/Panel_layout';
import Auth from '../admin/pages/Auth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/login" element={<Auth />} />
      
        <Route path="/admin" element={<Panel_layout />}>
          <Route index element={<AdminPage />} />
          <Route path="logout" element={<HomePage />} />
          <Route path="Visuels" element={<Visuels />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/Portfolio" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
    </>
  )
)

function App() {
  const [showLoader] = useState(false);

  return (
    <>
      {showLoader && <Loader />}
      <RouterProvider router={router} />
    </>
  )
}

export default App;
