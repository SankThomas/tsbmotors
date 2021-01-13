import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <>
      <section className="showcase relative">
        <div className="overlay absolute top-1/2 bg-white p-5 mx-5 rounded-lg">
          <h1 className="font-bold text-6xl text-red-800 mb-5 tracking-wide">
            TsbMotors
          </h1>
          <p className="text-lg">
            Visit our office at Adam's Arcade, Nairobi. We are open weekdays,
            7am - 5pm
          </p>
          <Link
            className="inline-block text-white bg-red-500 py-1 px-4 mt-5 rounded-lg transition-colors hover:bg-red-800"
            to="/collection"
          >
            See our car collection
          </Link>
        </div>
      </section>
    </>
  )
}

export default Showcase
