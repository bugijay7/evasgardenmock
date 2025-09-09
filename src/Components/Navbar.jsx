import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100 max-w-[1400px] mx-auto py-4 px-6">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-56 p-3 shadow z-[100]"
          >
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li>
              <details>
                <summary>Events</summary>
                <ul className="p-2">
                  <li><a href="/weddings">Weddings</a></li>
                  <li><a href="/corporate">Corporate Events</a></li>
                  <li><a href="/private">Private Parties</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a
                href="/book"
                className="btn bg-emerald-800 border-none text-white hover:bg-amber-600 w-full"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a href="/" className="btn btn-ghost text-2xl lg:text-3xl font-bold">Eva’s Garden</a>
      </div>

      {/* Center Menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">Events</div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a href="/weddings">Weddings</a></li>
                <li><a href="/corporate">Corporate Events</a></li>
                <li><a href="/private">Private Parties</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end hidden lg:flex">
        <a href="/book" className="btn bg-emerald-800 border-none text-white hover:bg-amber-600">
          Book Now
        </a>
      </div>
    </div>
  )
}

export default Navbar
