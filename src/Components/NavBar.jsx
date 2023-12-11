import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className=" flex justify-between items-center bg-white text-black p-3 drop-shadow-lg ">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">TANANAK C.</h1>
        </Link>
        <small className="text-gray-400 text-xs mx-3 ">
          Solution Crafter & Problems Explorer.
        </small>
      </div>
      <ul className="flex">
        {/* <li className="mx-1">
          <Link to="/About">About</Link>
        </li> */}
      </ul>
      <div className=" hidden sm:flex">
        <div
          className="mx-1 w-6 h-6 bg-sea border-white border-2 hover:border-black"
          title="sea: #9bb8cd"
        ></div>
        <div
          className="mx-1 w-6 h-6 bg-sage border-white border-2 hover:border-black"
          title="sage: #b1c381"
        ></div>
        <div
          className="mx-1 w-6 h-6 bg-mango border-white border-2 hover:border-black"
          title="mango: #eec759"
        ></div>
        <div
          className="mx-1 w-6 h-6 bg-beige border-white border-2 hover:border-black"
          title="beige: #fff7d4"
        ></div>
        <br />
      </div>
    </nav>
  )
}
