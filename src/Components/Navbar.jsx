import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <NavLink className="navbar-brand" to="/">
          CRUD APP
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Taskform
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/tasktable">
                Task Table
              </NavLink>
            </li>

            
            
          </ul>
        </div>

      </div>
    </nav>
    
    
    </>
  )
}

export default Navbar