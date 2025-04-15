import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function About() {
  return (
    <>
    <div style={{textAlign:"center"}}>
    <h1>About page</h1>
    <nav>
        <Link to="/Team" style={{ margin: '0 10px' }}>Our Team</Link>
        <Link to="/Company" style={{ margin: '0 10px' }}>Company</Link>
      </nav>
      <Outlet/>
    </div>
    </>
  )
}

export default About