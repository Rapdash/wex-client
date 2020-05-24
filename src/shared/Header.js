import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

export const Header = () => {
  const [user, loading, error] = useAuthState(auth());
  const [expanded, setExpanded] = useState(false);
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-4 shadow bg-blue-600">
        <div className="text-white mr-6">
          <h1 className="text-2xl font-display leading-normal">
            Water Exchange
          </h1>
          <h4 className="text-sm font-display leading-normal">
            By The Water Agency, Inc.
          </h4>
        </div>
        {!user && !loading && (
          <div />
        )}
        {user && (
          <>
            <div className="block lg:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-white hover:border-white"
                onClick={() => setExpanded(!expanded)}
              >
                <svg
                  className="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div
              className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                !expanded && "hidden"
              }`}
            >
              <div className="text-sm lg:flex-grow">
                <Link to="/listings">
                  <span
                    className={`block mt-4 lg:inline-block lg:mt-0 text-blue-200 text-base font-display hover:text-white mr-4`}
                  >
                    Listings
                  </span>
                </Link>
                <Link to="/recieved-offers">
                  <span className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 text-base font-display hover:text-white mr-4">
                    Recieved Offers
                  </span>
                </Link>
                <Link to="/sent-offers">
                  <span className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 text-base font-display hover:text-white mr-4">
                    Sent Offers
                  </span>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
