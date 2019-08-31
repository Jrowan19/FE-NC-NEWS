import React from 'react';
import { Link } from '@reach/router';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar fixed-top sitewrapper">
      <form className="form-row align-items-center bg-dark ">
        <div className="dropdown ml-3 mt-3 mb-2">
          <select
            className="btn btn-primary dropdown-toggle"
            type="text"
            name="username"
            value={props.username}
            onChange={props.handleUserChange}
          >
            <option value="jessjelly"> jessjelly</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="tickle122"> tickle122</option>
          </select>
        </div>
        <p className="text-white ml-3 mt-3 mb-2">
          <i className="fas fa-user" /> Logged in as {props.username}
        </p>
      </form>
      <Link className="nav-link text-white text-uppercase mr-8 n" to="/">
        NC-NEWZ&nbsp;
        <i className="fas fa-user-ninja" />
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
          <li className="nav-item active">
            <div className="dropdown show">
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
                <i className="fas fa-fire" />
              </a>
              {/* <!-- most popular articles/votes etc..... --> */}

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/articles">
                  Most Recent
                </Link>
                <Link className="dropdown-item" to="/articles?topic=cooking">
                  Most Popular
                </Link>
                <Link className="dropdown-item" to="/articles?topic=cooking">
                  Highest Rated
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item active">
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle mr-5 "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                TECHNOLOGY&nbsp;
                <i className="fas fa-laptop-code" />
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/topics/coding">
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
                <i className="fas fa-futbol" />
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/topics/football">
                  Football
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item active">
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
                <i className="fas fa-hamburger" />
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="topics/cooking">
                  Cooking
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item active">
            <div className="dropdown show">
              <a
                className="btn btn-danger dropdown-toggle mr-5"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ALL TOPICS&nbsp;
                <i className="fas fa-align-center" />
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/topics">
                  All
                </Link>
                <Link className="dropdown-item" to="/topics/cooking">
                  Cooking
                </Link>
                <Link className="dropdown-item" to="/topics/coding">
                  Coding
                </Link>
                <Link className="dropdown-item" to="/topics/football">
                  Football
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search NC News"
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
};

export default Navbar;
