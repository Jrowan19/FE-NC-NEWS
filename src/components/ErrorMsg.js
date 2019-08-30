import React from 'react';

const ErrorMsg = ({ error: { status, message } }) => {
  return (
    <h1>
      Whoops.....{status} {message}
    </h1>
  );
};

export default ErrorMsg;
