import React from 'react';

const ErrorMsg = ({ error: { status, message } }) => {
  return (
    <h1>
      Oops were sorry, there seems to be a problem{status} {message}
    </h1>
  );
};

export default ErrorMsg;
