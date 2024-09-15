"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuHome } from "react-icons/lu";
import { PiUserSquareLight } from "react-icons/pi";
import { IoGitNetworkOutline } from "react-icons/io5";
import { TbBrandBlogger } from "react-icons/tb";
import { FaRocketchat } from "react-icons/fa6";
import { IoIosMoon } from "react-icons/io";
import { GrChatOption } from "react-icons/gr";
import { IoSunny } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // If no saved theme, fallback to system preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDarkMode ? "dark" : "light";
  }
  return "light"; // Default to light theme for SSR or initial load
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Apply the theme to the HTML element
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Save the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function for the theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-center mt-5 mb-20 ">
      <nav className="bg-white dark:bg-black z-50 fixed shadow-md rounded-xl container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800 py-3">
                Port<span className="text-blue-500">Folio</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-10 mt-3">
              <li className="">
                <Link
                  className="flex items-center text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg p-2 no-underline"
                  href="/"
                  onClick={closeMobileMenu}
                >
                  <LuHome className="mr-2" />
                  <span className="">Home</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg p-2 no-underline"
                  href="/about"
                  onClick={closeMobileMenu}
                >
                  <PiUserSquareLight className="mr-2" />
                  <span>About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg p-2 no-underline"
                  href="/works"
                  onClick={closeMobileMenu}
                >
                  <IoGitNetworkOutline className="mr-2" />
                  <span>Works</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg p-2 no-underline"
                  href="/blog"
                  onClick={closeMobileMenu}
                >
                  <TbBrandBlogger className="mr-2" />
                  <span>Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg p-2 no-underline"
                  href="/contact"
                  onClick={closeMobileMenu}
                >
                  <FaRocketchat className="mr-2" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Theme Switch & Let's Talk */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <button onClick={toggleTheme} className="flex items-center p-2">
              <span className="text-xl">
                {theme === "light" ? (
                  <IoSunny className="text-yellow-500" />
                ) : (
                  <IoIosMoon className="text-gray-400" />
                )}
              </span>
            </button> */}

            <Link
              href="/contact"
              className="bg-black hover:bg-blue-500 text-white py-3 px-4 rounded-lg flex items-center no-underline"
            >
              Let&#39;s Talk
              <GrChatOption className="ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-600"
            onClick={toggleMobileMenu}
          >
            <RxHamburgerMenu className="text-2xl text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed  top-0 right-0 h-full bg-white w-2/3 shadow-lg transform  ${
            isMobileMenuOpen ? "z-50 translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu}>
              {/* <i className="fas fa-times text-2xl text-gray-600"></i> */}
              <RxCross2 className="text-2xl mt-4 font-[600] text-gray-600" />
            </button>
          </div>
          <ul className="flex flex-col items-start p-6 space-y-10 font-[600]">
            <li className="">
              <Link
                className="flex items-center text-gray-600 hover:text-blue-500 no-underline"
                href="/"
                onClick={closeMobileMenu}
              >
                <LuHome className="mr-2" />
                <span>Home</span>
              </Link>
            </li>
            <li className="">
              <Link
                className="flex items-center text-gray-600 hover:text-blue-500 no-underline"
                href="/about"
                onClick={closeMobileMenu}
              >
                <PiUserSquareLight className="mr-2" />
                <span>About</span>
              </Link>
            </li>
            <li className="">
              <Link
                className="flex items-center text-gray-600 hover:text-blue-500 no-underline"
                href="/works"
                onClick={closeMobileMenu}
              >
                <IoGitNetworkOutline className="mr-2" />
                <span>Works</span>
              </Link>
            </li>
            <li className="">
              <Link
                className="flex items-center text-gray-600 hover:text-blue-500 no-underline"
                href="/blog"
                onClick={closeMobileMenu}
              >
                <TbBrandBlogger className="mr-2" />
                <span>Blog</span>
              </Link>
            </li>
            <li className="">
              <Link
                className="flex items-center text-gray-600 hover:text-blue-500 no-underline"
                href="/contact"
                onClick={closeMobileMenu}
              >
                <FaRocketchat className="mr-2" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-black hover:bg-blue-500 text-white py-3 px-4 rounded-lg flex items-center no-underline"
              >
                Let&#39;s Talk
                <GrChatOption className="ml-2" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
