

import "./Header.css";
import logo from "../../IMG/LOGOMENU.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header  menu">
      <nav className="navbar navbar-dark fixed-top menu navbar-expand-lg">
        <div className="container-lg mx-3 navbar-nav ">
          <NavLink className="nav-link" to="/">
            <img
              className="logo mx-3"
              src={logo}
              alt="Erudiclon Landing Page"
            />
          </NavLink>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-3 ">
              <li className="nav-item linkmenu">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
              </li>
              <li className="nav-item linkmenu">
              <NavLink className="nav-link" to="/MarcaMatriz">
                Marca Matriz
              </NavLink>
              </li>
              <li className="nav-item linkmenu">
              <NavLink className="nav-link" to="/comic">
                Cómic
              </NavLink>
              </li>
            </ul>
            <nav class="navbar">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input
                    className="form-control botonbuscar me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn botonenviar btn-outline-light btn-sm"
                    type="submit"
                  >
                    Buscar
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
