import React from 'react';
import logo from '../assets/logo.png';

export const HomePage = () => {
  return (
    <>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <box>
        <div className='bg-banner'>
          <div style={{fontSize: '80px', fontWeight: 'bold'}}>WEEK SALE!</div>
          <div style={{fontSize: '30px'}}>Las mejores ofertas en celulares!</div>
          <div style={{ marginTop: '20px'}}>
            <button className='btn btn-primary'>Comprar Ahora!</button>
          </div>
        </div>
      </box>
    </>
  )
}
