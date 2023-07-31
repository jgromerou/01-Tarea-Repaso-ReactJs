import { useEffect } from 'react';
import logo from '../../assets/logo.png';
import MenuBar from './MenuBar';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
           <img src={ logo } width={40} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <MenuBar />
        </div>
      </nav>
  )
}

export default NavBar
