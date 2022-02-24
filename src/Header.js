import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className = "container"> 
                <img src = "./hospital-logo.png" alt = "" width = "100"/>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <Link to = "/" style = {{textDecoration: 'none'}}>
                  <li className="nav-item active px-5">
                   Home
                  </li>
                </Link>
                <Link to = "/about" style = {{textDecoration: 'none'}}>
                  <li className="nav-item px-5">
                    About
                  </li>
                </Link>
                <Link to = "/contact" style = {{textDecoration: 'none'}}>
                  <li className="nav-item px-5">
                    Contact
                  </li>
                </Link>
                <Link to = "/vaccination" style = {{textDecoration: 'none'}}>
                  <li className="nav-item px-5">
                    Vaccination
                  </li>
                </Link>
                </ul>
              </div>
              </div>
            </nav>
          </header>
    </div>
  )
}
