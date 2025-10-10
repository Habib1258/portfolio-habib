import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../admin_panel/Navbar";
import Panel from '../admin_panel/panel';

const Panel_layout = () => {
  return (
      <>
          <Navbar />
          <Panel/>
          <Outlet/>
      </>
  )
}

export default Panel_layout