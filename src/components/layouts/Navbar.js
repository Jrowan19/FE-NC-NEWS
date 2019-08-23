import React from 'react';
import { Link } from '@reach/router';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a
        href="https://twitter.com/jrowan10?lang=en"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary "
      >
        twitter&nbsp;
        <i className="fab fa-twitter" />
      </a>
      <a
        href="https://www.instagram.com/"
        rel="noopener noreferrer"
        target="_blank"
        className="navbar-brand"
        className="text-warning ml-2 "
      >
        insta&nbsp;
        <i className="fab fa-instagram" />
      </a>
      <Link className="nav-link text-white text-uppercase" to="/">
        home&nbsp;
        <i className="fas fa-hand-middle-finger" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li classNameName="nav-item active">
            <div className="dropdown show">
              <label className="text-white text-uppercase mr-2">Sort</label>
              <a
                className="btn btn-light dropdown-toggle mr-5"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                hot&nbsp;
                <i class="fas fa-fire" />
              </a>
              {/* <!-- most popular articles/votes etc..... --> */}

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/articles?topic=cooking">
                  Cooking
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item active">
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle mr-5"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                TECHNOLOGY&nbsp;
                <i class="fas fa-laptop-code" />
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/articles?topic=coding">
                  Coding
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="dropdown show">
              <a
                className="btn btn-warning dropdown-toggle mr-5"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SPORT&nbsp;
                <i class="fas fa-futbol" />
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/articles?topic=football">
                  Football
                </Link>
              </div>
            </div>
          </li>
          <li classNameName="nav-item active">
            <div className="dropdown show">
              <a
                className="btn btn-success dropdown-toggle mr-5"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                FOOD&nbsp;
                <i class="fas fa-hamburger" />
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/articles?topic=cooking">
                  Cooking
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
