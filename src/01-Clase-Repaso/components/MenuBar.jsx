const MenuBar = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
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
  )
}

export default MenuBar
