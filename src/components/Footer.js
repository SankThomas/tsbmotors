import React from 'react'
import { Link } from 'react-router-dom'
import { HiLocationMarker } from 'react-icons/hi'
import { GrFacebook } from 'react-icons/gr'
import { FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10 px-5 md:flex md:items-center md:justify-between">
        <div>
          <h3 className="text-4xl font-bold mb-10">TsbMotors</h3>
        </div>

        <div>
          <p>
            <HiLocationMarker className="inline-block -mt-1" /> Adam's Arcade,
            Nairobi County
          </p>
        </div>

        <ul className="my-10 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collection">Cars</Link>
          </li>
        </ul>

        <ul className="text-3xl flex items-center justify-center">
          <li className="mx-3">
            <GrFacebook />
          </li>
          <li className="mx-3">
            <FaTwitter />
          </li>
          <li className="mx-3">
            <FaInstagram />
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
