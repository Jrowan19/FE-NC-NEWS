import React from 'react';

function SignIn() {
  return (
    <form>
      <div className="form-row align-items-center bg-dark mw-150">
        <div className="col-auto">
          <label className="sr-only" for="inlineFormInput">
            Name
          </label>

          <input
            type="text"
            className="form-control mt-5 mb-2 "
            id="inlineFormInput"
            placeholder="Name"
          />
        </div>
        <div className="col-auto">
          <label className="sr-only" for="inlineFormInputGroup">
            Username
          </label>
          <div className="input-group mt-5 mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="col-auto">
          <div className="form-check mt-5 mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="autoSizingCheck"
            />
            <label
              className="form-check-label text-white"
              for="autoSizingCheck"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mt-5 mb-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
