import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <button
                            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                className="w-5"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="navbar-collapse grow  justify-between items-center"
                        id="navbarSupportedContentY"
                    >
                        <div className="heading">My blog</div>
                        <ul className="navbar-nav hidden  lg:ml-auto lg:flex lg:flex-row space-x-3">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="capitalize font-serif bg-blue-600 block pr-2 lg:px-4 py-2 text-gray-900 font-semibold rounded-full text-white"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/my-posts"
                                    className="capitalize font-serif bg-blue-600 block pr-2 lg:px-4 py-2 text-gray-900 font-semibold rounded-full text-white"
                                >
                                    add blogs
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/profile"
                                    className="capitalize font-serif bg-blue-600 block pr-2 lg:px-4 py-2 text-gray-900 font-semibold rounded-full text-white"
                                >
                                    profile
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/logout"
                                    className="capitalize font-serif bg-blue-600 block pr-2 lg:px-4 py-2 text-gray-900 font-semibold rounded-full text-white"
                                >
                                   logout
                                </NavLink>
                            </li>

                                                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
