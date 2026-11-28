import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.scss"

const Error = () => {
  return (
    <main className="error-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link to="/">Back to Home</Link>

      <p>
        If you believe this is a mistake, please contact the developer.
      </p>
    </main>
  );
};

export default Error;