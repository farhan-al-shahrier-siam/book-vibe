import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white px-6">
      <div className="text-center max-w-lg">
        
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold bg-linear-to-r from-red-500 to-orange-400 text-transparent bg-clip-text animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link to="/">
            <button className="px-6 py-3 bg-linear-to-r from-red-500 to-orange-400 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
              Go Back Home
            </button>
          </Link>
        </div>

        {/* Extra small text */}
        <p className="mt-6 text-sm text-gray-500">
          Error Code: 404 | Lost in space 🚀
        </p>

      </div>
    </div>
  );
};

export default ErrorPage;