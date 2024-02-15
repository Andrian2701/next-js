"use client";

import Link from "next/link";

import "../../styles/pages/NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>Sorry, page not found!</h1>
      <p>
        Sorry, we couldn't find the page you're looking for. Perhaps you've
        mistyped the URL? Be sure to check your spelling.
      </p>
      <div className="not-found-img">
        <img
          src="https://muidash.netlify.app/static/media/404.21608b42.svg"
          alt="404"
        />
      </div>
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default NotFound;
