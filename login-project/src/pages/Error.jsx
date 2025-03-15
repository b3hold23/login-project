import { Link } from 'react-router-dom';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go back to the main page</Link>
        </div>
    );
};

export default ErrorPage;