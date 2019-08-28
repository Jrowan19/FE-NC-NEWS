import React from 'react';

function Header(props) {
  return (
    <>
      <form className="form-row align-items-center bg-dark ">
        <div className="dropdown ml-3 mt-5 mb-2">
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
        <p className="text-white ml-3 mt-5 mb-2">
          <i className="fas fa-user" /> Logged in as {props.username}
        </p>
      </form>
    </>
  );
}

export default Header;
