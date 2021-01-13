import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="bg-red-500 py-4 px-5 flex items-center justify-between text-white">
        <div>
          <Link to="/">
            <h1 className="font-bold text-4xl lg:text-6xl">TsbMotors</h1>
          </Link>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-3">
              <Link to="/collection">Collection</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
