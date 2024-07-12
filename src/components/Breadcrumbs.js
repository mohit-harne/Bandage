import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-gray-500 text-sm mb-4 ml-[23px]">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="text-gray-500">
            Home
          </Link>
          <svg className="w-2 h-2 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <path d="M7.719 3.719l-3 3c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3-3c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414z" />
          </svg>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center">
              <Link
                to={routeTo}
                className={`text-gray-500 ${isLast ? "font-semibold" : ""}`}
              >
                {name}
              </Link>
              {!isLast && (
                <svg
                  className="w-2 h-2 mx-2"
                  viewBox="0 0 8 8"
                  fill="currentColor"
                >
                  <path d="M7.719 3.719l-3 3c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3-3c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414z" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
