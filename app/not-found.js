import React from "react";
import Link from "next/link";
import "./not-found.css"

const NotFound = () => {
  return (
    <div className="error_page">
        <h1>404!</h1>
        <p>The page you are looking for could not be found.</p>
        <div className="button">
            <Link href="/">BACK TO HOME</Link>
        </div>
    </div>
  );
};

export default NotFound;