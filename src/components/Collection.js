import React from 'react'
import data from '../data/collection'

const Collection = () => {
  const [cars, setCars] = React.useState(data)

  const removeCar = (id) => {
    const newCars = cars.filter((car) => car.id !== id)
    setCars(newCars)
  }

  return (
    <>
      <h2 className="text-center pt-10 text-4xl font-bold lg:text-6xl">
        Browse our collection
      </h2>
      <section className="my-10 grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {cars.map((car) => {
          const { id, name, image, desc, body, manufacturer, carClass } = car

          return (
            <div key={id} className="bg-red-200 rounded-lg">
              <div>
                <img
                  className="rounded-lg rounded-b-none"
                  src={image}
                  alt={name}
                />

                <div className="py-4 px-8">
                  <h3 className="font-bold text-3xl mb-5">{name}</h3>
                  <p>{desc}</p>
                </div>
              </div>

              <ul className="pt-0 pb-5 px-8">
                <p className="font-bold text-lg mb-1">Specs:</p>
                <li>
                  <span className="font-bold">Body:</span> {body}
                </li>
                <li>
                  <span className="font-bold">Manufacturer:</span>{' '}
                  {manufacturer}
                </li>
                <li>
                  <span className="font-bold">Class: </span>
                  {carClass}
                </li>
              </ul>

              <div className="px-8 pb-5">
                <button
                  className="bg-red-500 py-1 px-4 rounded-lg text-white font-bold hover:bg-red-800"
                  onClick={() => removeCar(id)}
                >
                  Remove from list
                </button>
              </div>
            </div>
          )
        })}
      </section>

      <div className="text-center pb-10">
        <button
          className="bg-red-500 py-1 px-4 rounded-lg text-white font-bold hover:bg-red-800"
          onClick={() => setCars(data)}
        >
          Refresh
        </button>
      </div>
    </>
  )
}

export default Collection
